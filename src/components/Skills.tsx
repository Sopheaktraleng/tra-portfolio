import { SkillsData } from "@/data/constants";
import Image from "next/image";
const Skills = () => {
    return (
        <section className="md:py-16 flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold mb-4">Technique Skills</h2>
            <p className="text-lg w-auto mx-auto text-center ">
                A comprehensive overview of my technical expertise and
                proficiency across different areas of software development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 w-[380px] md:w-[1000px] md:h-[500px] gap-8 p-4 ">
                {SkillsData.map((category) => (
                    <div
                        key={category.title}
                        className="border border-[#33353F] rounded-lg p-3 md:p-4"
                    >
                        <h3 className="text-xl font-semibold mb-3 ">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-center md:p-4 items-center justify-center">
                            {category.skills?.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-2 border rounded-lg p-2"
                                >
                                    {skill.image ? (
                                        <Image
                                            src={skill.image}
                                            alt={skill.name}
                                            className="w-6 h-6"
                                            width={50}
                                            height={50}
                                        />
                                    ) : (
                                        <div className="w-6 h-6"></div>
                                    )}
                                    <span className="text-sm font-medium">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default Skills;

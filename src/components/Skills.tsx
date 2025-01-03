import { SkillsData } from "@/data/constants";

const Skills = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6"></div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
                Technique Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
                A comprehensive overview of my technical expertise and
                proficiency across different areas of software development.
            </p>
            <div className="grid grid-cols-2 w-[1000px] h-[500px] gap-8 p-4 ">
                {SkillsData.map((category) => (
                    <div key={category.title} className="border rounded-lg p-4">
                        <h3 className="text-xl font-semibold mb-3 ">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-center  p-4 items-center justify-center">
                            {category.skills?.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex items-center gap-2 border rounded-lg p-2"
                                >
                                    {skill.image ? (
                                        <img
                                            src={skill.image}
                                            alt={skill.name}
                                            className="w-6 h-6"
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

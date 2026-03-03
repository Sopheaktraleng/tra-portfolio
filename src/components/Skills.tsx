import { SkillsData } from "@/data/constants";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const Skills = () => {
    return (
        <section className="md:py-16 flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center max-w-3xl px-4">
                <Reveal>
                    <h2 className="section-title">
                        <span className="section-title-gradient">
                            Technique Skills
                        </span>
                    </h2>
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="section-subtitle-lg">
                        A comprehensive overview of my technical expertise and
                        proficiency across different areas of software
                        development.
                    </p>
                </Reveal>
            </div>

            {/* Grid */}
            <div
                className="
          mt-8
          grid gap-6
          w-full max-w-[1100px]
          px-4
          grid-cols-1
          md:grid-cols-2
        "
            >
                {SkillsData.map((category, index) => (
                    <Reveal
                        key={category.title}
                        delay={index * 0.06}
                        className="h-full"
                    >
                        <div className="group glass-card glass-card-hover p-5">
                            {/* Card header */}
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight">
                                    {category.title}
                                </h3>
                                <span
                                    className="
                  text-xs px-2 py-1 rounded-full
                  bg-violet-500/10 text-violet-700
                  dark:bg-violet-400/10 dark:text-violet-300
                  border border-violet-500/20 dark:border-violet-400/20
                "
                                >
                                    {category.skills?.length || 0} items
                                </span>
                            </div>

                            {/* Skills chips */}
                            <div className="flex flex-wrap gap-3 items-center">
                                {category.skills?.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="skill-chip"
                                        title={skill.name}
                                    >
                                        {skill.image ? (
                                            <Image
                                                src={skill.image}
                                                alt={skill.name}
                                                width={20}
                                                height={20}
                                                unoptimized={
                                                    typeof skill.image === "string" &&
                                                    /^https?:\/\//i.test(
                                                        skill.image
                                                    )
                                                }
                                                className="h-5 w-5 rounded-sm object-contain"
                                            />
                                        ) : (
                                            <div className="h-5 w-5 rounded-sm bg-slate-200 dark:bg-white/10" />
                                        )}
                                        <span className="text-sm font-medium whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Skills;

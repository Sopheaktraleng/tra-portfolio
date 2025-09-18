import { SkillsData } from "@/data/constants";
import Image from "next/image";

const Skills = () => {
    return (
        <section className="md:py-16 flex flex-col items-center justify-center">
            {/* Header */}
            <div className="text-center max-w-3xl px-4">
                <h2 className="text-4xl font-bold mb-3 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                        Technique Skills
                    </span>
                </h2>
                <p className="text-lg text-slate-700 dark:text-white/80">
                    A comprehensive overview of my technical expertise and
                    proficiency across different areas of software development.
                </p>
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
                {SkillsData.map((category) => (
                    <div
                        key={category.title}
                        className="
              group
              rounded-2xl
              border border-black/10 dark:border-white/10
              bg-white/70 dark:bg-white/5
              backdrop-blur-md
              shadow-md dark:shadow-lg
              transition duration-300
              hover:shadow-lg dark:hover:shadow-xl
              hover:-translate-y-0.5
              p-5
            "
                    >
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
                                    className="
                    inline-flex items-center gap-2
                    px-3 py-2 rounded-xl
                    border border-black/10 dark:border-white/10
                    bg-white/60 dark:bg-white/5
                    text-slate-800 dark:text-white/85
                    shadow-sm
                    hover:border-violet-500/30 dark:hover:border-violet-400/30
                    hover:shadow-md
                    transition
                  "
                                    title={skill.name}
                                >
                                    {skill.image ? (
                                        <Image
                                            src={skill.image}
                                            alt={skill.name}
                                            width={20}
                                            height={20}
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
                ))}
            </div>
        </section>
    );
};

export default Skills;

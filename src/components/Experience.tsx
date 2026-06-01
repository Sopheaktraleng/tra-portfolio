import { ExperienceData } from "@/data/constants";
import ExperienceCard from "./Card/ExperienceCard";
import Reveal from "@/components/Reveal";

const Experience = () => {
    return (
        <section className="py-16">
            {/* Header */}
            <div className="mx-auto max-w-6xl px-6 text-center">
                <Reveal>
                    <h2 className="section-title">
                        <span className="section-title-gradient">Experience</span>
                    </h2>
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="section-subtitle-lg mx-auto max-w-3xl">
                        Building digital solutions and continuously growing
                        through real-world engineering challenges.
                    </p>
                </Reveal>
            </div>

            {/* Timeline */}
            <div className="relative mt-12 mx-auto max-w-6xl px-4">
                {/* Vertical center line — md+ only */}
                <div className="absolute hidden md:block left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-slate-300/70 dark:via-white/20 to-transparent" />

                <div className="flex flex-col gap-10">
                    {ExperienceData.map((exp, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={exp.id} className="relative flex items-start gap-6 md:gap-0">
                                {/* Left slot */}
                                <div className={`hidden md:flex w-1/2 ${isLeft ? "justify-end pr-10" : ""}`}>
                                    {isLeft && (
                                        <Reveal delay={index * 0.06} className="w-full max-w-sm">
                                            <ExperienceCard exp={exp} />
                                        </Reveal>
                                    )}
                                </div>

                                {/* Timeline dot */}
                                <div className="relative flex-shrink-0 z-10 hidden md:flex items-center justify-center">
                                    <Reveal delay={index * 0.06 + 0.1}>
                                        <span className="block h-3 w-3 rounded-full bg-violet-500/80 dark:bg-fuchsia-400/80 ring-4 ring-white dark:ring-black shadow" />
                                    </Reveal>
                                </div>

                                {/* Right slot */}
                                <div className={`hidden md:flex w-1/2 ${!isLeft ? "justify-start pl-10" : ""}`}>
                                    {!isLeft && (
                                        <Reveal delay={index * 0.06} className="w-full max-w-sm">
                                            <ExperienceCard exp={exp} />
                                        </Reveal>
                                    )}
                                </div>

                                {/* Mobile — full width, left line */}
                                <div className="flex md:hidden items-start gap-4 w-full">
                                    <div className="flex flex-col items-center flex-shrink-0 pt-2">
                                        <span className="block h-3 w-3 rounded-full bg-violet-500/80 dark:bg-fuchsia-400/80 ring-4 ring-white dark:ring-black shadow" />
                                        {index < ExperienceData.length - 1 && (
                                            <div className="mt-2 w-[2px] h-full flex-1 min-h-[2rem] bg-gradient-to-b from-slate-300/70 dark:from-white/20 to-transparent" />
                                        )}
                                    </div>
                                    <Reveal delay={index * 0.06} className="flex-1">
                                        <ExperienceCard exp={exp} />
                                    </Reveal>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;

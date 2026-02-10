import { ExperienceData } from "@/data/constants";
import {
    Timeline,
    TimelineContent,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import ExperienceCard from "./Card/ExperienceCard";
import Reveal from "@/components/Reveal";
import AnimatedMarker from "@/components/AnimatedMarker";

const Experience = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <Reveal>
                    <h2 className="text-4xl font-bold mb-3 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                            Experience
                        </span>
                    </h2>
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="text-lg text-muted-foreground mx-auto max-w-3xl">
                        Building digital solutions and continuously learning
                        through practical experience and academic excellence.
                    </p>
                </Reveal>
            </div>

            <div className="mt-8 w-full flex flex-col items-center justify-center gap-3">
                <Timeline>
                    {ExperienceData.map((exp, index) => (
                        <TimelineItem
                            key={index}
                            className="relative flex flex-col scale-90 md:scale-110 mb-[-30px] md:mb-8 ml-4 md:ml-0"
                        >
                            <TimelineContent
                                sx={{
                                    width: index % 2 === 0 ? "50%" : "auto",
                                    display: index % 2 === 0 ? "block" : "none",
                                }}
                            >
                                {index % 2 === 0 && (
                                    <Reveal delay={index * 0.06}>
                                        <ExperienceCard exp={exp} />
                                    </Reveal>
                                )}
                            </TimelineContent>

                            <TimelineSeparator className="absolute md:left-1/2 md:-translate-x-1/2 h-full md:p-1">
                                <AnimatedMarker delay={index * 0.06 + 0.1} />
                            </TimelineSeparator>

                            <TimelineContent
                                sx={{
                                    width: "50%",
                                    paddingLeft: 0,
                                    marginLeft: "1rem",
                                    "@media (min-width: 768px)": {
                                        paddingLeft: "25rem",
                                        marginLeft: "3rem",
                                    },
                                    display: index % 2 !== 0 ? "block" : "none",
                                }}
                            >
                                {index % 2 !== 0 && (
                                    <Reveal delay={index * 0.06}>
                                        <ExperienceCard exp={exp} />
                                    </Reveal>
                                )}
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
};
export default Experience;

import { ExperienceData } from "@/data/constants";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import ExperienceCard from "./Card/ExperienceCard";

const Experience = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <h2 className="text-4xl font-bold mb-3 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                        Experience
                    </span>
                </h2>
                <p className="text-lg text-muted-foreground mx-auto max-w-3xl">
                    Building digital solutions and continuously learning through
                    practical experience and academic excellence.
                </p>
            </div>

            <div className="mt-8 w-full flex flex-col items-center justify-center gap-3">
                <Timeline>
                    {ExperienceData.map((exp, index) => (
                        <TimelineItem
                            key={index}
                            className="flex flex-col scale-90 md:scale-110 mb-[-30px] md:mb-8 ml-4 md:ml-0"
                        >
                            <TimelineContent
                                sx={{
                                    width: index % 2 === 0 ? "50%" : "auto",
                                    display: index % 2 === 0 ? "block" : "none",
                                }}
                            >
                                {index % 2 === 0 && (
                                    <ExperienceCard exp={exp} />
                                )}
                            </TimelineContent>

                            <TimelineSeparator className="absolute md:left-1/2 transform -translate-x-1/2 h-full md:p-1">
                                <TimelineDot
                                    variant="outlined"
                                    color="secondary"
                                />
                                {index !== ExperienceData.length && (
                                    <TimelineConnector
                                        className="h-full"
                                        style={{ background: "#854CE6" }}
                                    />
                                )}
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
                                    <ExperienceCard exp={exp} />
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

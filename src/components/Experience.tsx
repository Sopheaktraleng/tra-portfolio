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
            <div className="max-w-6xl mx-auto px-6"></div>
            <h2 className="text-4xl font-bold">Experience</h2>
            <p className="text-lg text-muted-foreground w-96 md:w-auto mx-auto text-center">
                Building digital solutions and continuously learning through
                practical experience and academic excellence.
            </p>
            <div className="w-full md:mt-8 flex flex-col items-center justify-center gap-3">
                <Timeline>
                    {ExperienceData.map((exp, index) => (
                        <TimelineItem
                            key={index}
                            className="flex flex-col scale-90 md:scale-110 mb-[-30px] md:mb-8 ml-4 md:ml-0"
                        >
                            {/* Left Side Content for Even Index */}
                            <TimelineContent
                                sx={{
                                    width: index % 2 === 0 ? "50%" : "auto", // Apply '50%' width if index is even, otherwise 'auto' (you can use display: 'none' if you want to hide it completely)
                                    display: index % 2 === 0 ? "block" : "none", // Conditionally show or hide based on index
                                }}
                            >
                                {index % 2 === 0 && (
                                    <ExperienceCard exp={exp} />
                                )}
                            </TimelineContent>

                            {/* Center Separator */}
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

                            {/* Right Side Content for Odd Index */}
                            <TimelineContent
                                sx={{
                                    width: "50%",
                                    paddingLeft: 0,
                                    marginLeft: "1rem",
                                    "@media (min-width: 768px)": {
                                        paddingLeft: "25rem",
                                        marginLeft: "3rem",
                                    },
                                    display: index % 2 !== 0 ? "block" : "none", // Show when index is odd, hide when even
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

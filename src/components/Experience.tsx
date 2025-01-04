import { ExperienceData } from "@/data/constants";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";
import ExperienceCard from "./assets/Card/ExperienceCard";

const Experience = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6"></div>
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg max-w-2xl mx-auto text-center">
                Building digital solutions and continuously learning through
                practical experience and academic excellence.
            </p>
            <div className="w-full mt-2.5 flex flex-col items-center justify-center gap-3">
                <Timeline>
                    {ExperienceData.map((exp, index) => (
                        <TimelineItem key={index} className="flex flex-col">
                            {/* Left Side Content for Even Index */}
                            {index % 2 === 0 ? (
                                <TimelineContent className="w-1/2">
                                    <ExperienceCard exp={exp} />
                                </TimelineContent>
                            ) : (
                                <div></div> // Empty space for alignment
                            )}

                            {/* Center Separator */}
                            <TimelineSeparator className="absolute md:left-1/2 transform -translate-x-1/2 h-full">
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
                            {index % 2 !== 0 ? (
                                <TimelineContent className="w-1/2 pl-0 ml-4 md:pl-96 md:ml-12">
                                    <ExperienceCard exp={exp} />
                                </TimelineContent>
                            ) : (
                                <div></div> // Empty space for alignment
                            )}
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
};
export default Experience;

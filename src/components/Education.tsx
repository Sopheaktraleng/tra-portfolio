import { EducationData } from "@/data/constants";
import EducationCard from "./Card/EducationCard";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
} from "@mui/lab";

const Education = () => {
    return (
        <section className="md:py-16 ">
            <div className="max-w-6xl mx-auto px-6"></div>
            <h2 className="text-4xl font-bold mb-4">Education111122</h2>
            <p className="text-lg text-muted-foreground w-96 md:w-auto mx-auto text-center">
                Building digital solutions and continuously learning through
                practical experience and academic excellence.
            </p>
            <div className="md:w-full md:mt-8 flex flex-col items-center justify-center gap-3">
                <Timeline>
                    {EducationData.map((edu, index) => (
                        <TimelineItem
                            key={index}
                            className="flex flex-col scale-90 md:scale-110 mb-[-30px] md:mb-4 ml-4 md:ml-0 "
                        >
                            {/* Left Side Content for Even Index */}
                            <TimelineContent
                                sx={{
                                    width: index % 2 === 0 ? "50%" : "auto", // Apply '50%' width if index is even, otherwise 'auto' (hidden can be controlled with conditional rendering)
                                    display: index % 2 === 0 ? "block" : "none", // Conditionally show or hide based on index
                                }}
                            >
                                {index % 2 === 0 && <EducationCard edu={edu} />}
                            </TimelineContent>

                            {/* Center Separator */}
                            <TimelineSeparator className="absolute md:left-1/2 transform -translate-x-1/2 h-full">
                                <TimelineDot
                                    variant="outlined"
                                    color="secondary"
                                />
                                {index !== EducationData.length && (
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
                                    display: index % 2 !== 0 ? "block" : "none", // Show content when index is odd, hide it when even
                                }}
                            >
                                {index % 2 !== 0 && <EducationCard edu={edu} />}
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </section>
    );
};
export default Education;

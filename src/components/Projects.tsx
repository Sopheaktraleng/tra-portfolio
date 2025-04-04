import { projectsData } from "@/data/constants";
import ProjectCard from "./Card/ProjectCard";

const Projects = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6"></div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
                Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground w-96 md:w-auto mx-auto text-center">
                Building digital solutions and continuously learning through
                practical experience and academic excellence.
            </p>
            <div className="flex justify-center items-center pt-5">
                <ul className="flex flex-wrap gap-3 text-center md:p-4 items-center justify-center">
                    {projectsData.map((pro, index) => (
                        <li
                            key={index}
                            className="flex justify-center items-center"
                        >
                            <ProjectCard pro={pro} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
export default Projects;

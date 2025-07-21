import { projectsData } from "@/data/constants";
import ProjectCard from "./Card/ProjectCard";

const Projects = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6"></div>
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg w-96 md:w-auto mx-auto text-center">
                Building digital solutions and continuously learning through
                practical experience and academic excellence.
            </p>
            <div className="flex justify-center items-center pt-5">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
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

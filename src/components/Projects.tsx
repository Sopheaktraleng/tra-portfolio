import { projectsData } from "@/data/constants";
import ProjectCard from "./Card/ProjectCard";

const Projects = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <h2 className="text-4xl font-bold mb-3 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                        Featured Projects
                    </span>
                </h2>
                <p className="text-lg mx-auto max-w-3xl">
                    Building digital solutions and continuously learning through
                    practical experience and academic excellence.
                </p>
            </div>

            <div className="flex justify-center items-center pt-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center max-w-6xl px-6">
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

import { projectsData } from "@/data/constants";
import ProjectCard from "./Card/ProjectCard";
import Reveal from "@/components/Reveal";

const Projects = () => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-6xl px-6 text-center">
                <Reveal>
                    <h2 className="section-title">
                        <span className="section-title-gradient">
                            Featured Projects
                        </span>
                    </h2>
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="section-subtitle-lg mx-auto max-w-3xl">
                        A selection of projects I&apos;ve built — from internal
                        management systems to full-stack web applications.
                    </p>
                </Reveal>
            </div>

            <div className="flex justify-center items-center pt-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center max-w-6xl px-6">
                    {projectsData.map((pro) => (
                        <li
                            key={pro.id}
                            className="flex justify-center items-center"
                        >
                            <Reveal className="w-full">
                                <ProjectCard pro={pro} />
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;

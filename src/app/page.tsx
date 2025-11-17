import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";

const Skills = dynamic(() => import("@/components/Skills"), {
    loading: () => <SectionSkeleton title="Skills" />,
});
const Education = dynamic(() => import("@/components/Education"), {
    loading: () => <SectionSkeleton title="Education" />,
});
const Experience = dynamic(() => import("@/components/Experience"), {
    loading: () => <SectionSkeleton title="Experience" />,
});
const Projects = dynamic(() => import("@/components/Projects"), {
    loading: () => <SectionSkeleton title="Projects" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
    loading: () => <SectionSkeleton title="Contact" />,
});

function SectionSkeleton({ title }: { title: string }) {
    return (
        <section className="scroll-mt-24 mb-10">
            <div className="mx-auto max-w-5xl px-4">
                <div
                    className="h-6 w-40 mb-4 rounded-lg bg-black/5 dark:bg-white/10"
                    aria-hidden
                />
                <div
                    className="h-24 w-full rounded-xl bg-black/5 dark:bg-white/10 animate-pulse"
                    aria-label={`${title} loading`}
                />
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <main className="flex flex-col text-center justify-center overflow-x-hidden">
            <section id="home" className="scroll-mt-24 mb-10" aria-label="Home">
                <HeroSection />
            </section>

            <section
                id="skills"
                className="scroll-mt-24 mb-10"
                aria-label="Skills"
            >
                <Skills />
            </section>

            <section
                id="education"
                className="scroll-mt-24 mb-10"
                aria-label="Education"
            >
                <Education />
            </section>

            <section
                id="experience"
                className="scroll-mt-24 mb-10"
                aria-label="Experience"
            >
                <Experience />
            </section>

            <section
                id="projects"
                className="scroll-mt-24 mb-10"
                aria-label="Projects"
            >
                <Projects />
            </section>

            <section id="contact" className="scroll-mt-24" aria-label="Contact">
                <Contact />
            </section>
        </main>
    );
}

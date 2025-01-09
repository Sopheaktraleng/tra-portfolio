import Skills from "@/components/Skills";
import Education from "../components/Education";
import HeroSection from "../components/HeroSection";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Head from "next/head";
export default function Home() {
    return (
        <div className="flex flex-col text-center justify-center overflow-x-hidden">
            <Head>
                <title>Leng Sopheaktra - Software Engineer</title>
                <meta
                    name="description"
                    content="Professional portfolio of Leng Sopheaktra - Software Engineer"
                />
            </Head>
            <div>
                <HeroSection />
            </div>

            <div className="mb-10">
                <Skills />
            </div>
            <div>
                <Education />
            </div>
            <div>
                <Experience />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>
            <footer className="py-8 bg-gray-900 text-white">
                <Footer />
            </footer>
        </div>
    );
}

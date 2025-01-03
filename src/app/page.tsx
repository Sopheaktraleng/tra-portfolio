import Skills from "@/components/Skills";
import AboutMe from "../components/AboutMe";
import HeroSection from "../components/HeroSection";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <div className="flex text-center justify-center">
                <AboutMe />
            </div>
            <div className="flex text-center justify-center mb-10">
                <Skills />
            </div>
            <div className="flex text-center justify-center">
                <Projects />
            </div>
            <div className="flex text-center justify-center">
                <Contact />
            </div>
            <footer className="py-8 bg-gray-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Leng Sopheaktra. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

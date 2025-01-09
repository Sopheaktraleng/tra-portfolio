import Image from "next/image";
import trapic from "./assets/traaqq.jpg";
import { ChevronDown, Eye } from "lucide-react";

const HeroSection = () => {
    const technologies = [
        "React",
        "TypeScript",
        "Next.js",
        "AWS",
        "PostgreSQL",
    ];
    return (
        <section className="min-h-screen flex items-center justify-center text-start overflow-hidden">
            <div className="w-full md:max-w-7xl mx-auto px-6 py-12 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/*Left Coloum*/}
                    <div className="inline-block px-4 py-2 backdrop-blur-sm  rounded-full text-sm font-medium">
                        <span>👋 Welcome to my portfolio</span>
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground py-4">
                                Hi, Leng Sopheaktra
                            </h1>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground">
                                Full-Stack Developer
                            </h2>
                            <p className="py-4">
                                Crafting impactful digital experiences with a
                                focus on modern web technologies. I’m passionate
                                about building intuitive, high-performance
                                applications that deliver real value and make a
                                difference
                            </p>
                            <div className="flex flex-wrap gap-3 mb-5">
                                {technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 border rounded-lg p-1"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href="https://docs.google.com/document/d/1x0XMxtWcBSzp0PJl2r6HRH_HvpbB6nAi3CfV-Nztv30/edit?tab=t.0"
                                className="px-6 py-3   rounded-xl   duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl border w-36 h-10"
                            >
                                <Eye className="w-5 h-5" />
                                Veiw CV
                            </a>
                        </div>
                    </div>

                    <div className=" relative order-first lg:order-last flex justify-center items-center ">
                        {/*Right Coloum*/}
                        <div className="relative max-w-md mx-auto">
                            <div className="relative aspect-square rounded-3xl overflow-hidden from-primary/10 to-purple-500/10 backdrop-blur-sm shadow-2xl">
                                <Image
                                    width={500}
                                    height={500}
                                    src={trapic} // Using the imported image
                                    alt="Profile"
                                    className="w-[350px] h-[350px] md:w-full md:h-full object-cover rounded-3xl" // Add rounded-3xl here as well
                                />
                            </div>
                            <div className="absolute -right-5 top-[-20px] md:-right-10 md:-top-6 bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border">
                                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                                    🚀 Open to Work
                                </span>
                            </div>
                            <div className="absolute -left-5 md:-left-12 b -bottom-6 bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border">
                                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                                    💻 Full Stack Developer
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Scoll*/}
                <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                        Scoll to Explore
                    </span>
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                </div>
            </div>
        </section>
    );
};
export default HeroSection;

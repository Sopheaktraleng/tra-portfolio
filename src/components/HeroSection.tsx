import Image from "next/image";
import trapic from "./assets/pic.jpg";
import { ChevronDown, Eye } from "lucide-react";

const HeroSection = () => {
    const technologies = [
        "React",
        "TypeScript",
        "Node.js",
        "Next.js",
        "AWS",
        "PostgreSQL",
    ];
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="relative w-full max-w-7xl mx-auto px-6 py-12 md:py-24">
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
                            <div className="px-6 py-3   rounded-xl   duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl border w-36 h-10">
                                <Eye className="w-5 h-5" />
                                Veiw CV
                            </div>
                        </div>
                    </div>

                    <div className=" relative order-first lg:order-last">
                        {/*Right Coloum*/}
                        <div className="relative max-w-md mx-auto">
                            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-purple-500/10 backdrop-blur-sm shadow-2xl">
                                <Image
                                    src={trapic} // Using the imported image
                                    alt="Profile"
                                    className="w-[400px] h-[400px] object-cover rounded-3xl" // Add rounded-3xl here as well
                                />
                            </div>
                            <div className="absolute -right-0 -top-6 bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border">
                                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                                    🚀 Open to Work
                                </span>
                            </div>
                            <div className="absolute -left-14 b -bottom-0 bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border">
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

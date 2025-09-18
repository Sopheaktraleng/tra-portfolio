"use client";
import Image from "next/image";
import trapic from "./assets/traaqq.jpg";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="w-full md:max-w-7xl mx-auto px-6 py-12 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column (Text) */}
                    <div className="flex flex-col items-start text-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md text-xs font-medium text-slate-700 dark:text-white/80">
                            <span>👋</span>
                            <span>Welcome to my portfolio</span>
                        </div>

                        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Hi, Leng Sopheaktra
                        </h1>

                        <h2 className="mt-2 text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 dark:text-white/90">
                            Full-Stack Developer
                        </h2>

                        <p className="mt-6 text-base leading-relaxed text-slate-700 dark:text-white/80 max-w-2xl">
                            I’m a software engineer with a passion for building
                            dynamic, user-friendly web applications. My primary
                            expertise is in JavaScript, and I also work with
                            Python and PHP. I manage deployments and have solid
                            DevOps experience with Docker, Jenkins, GitHub
                            Actions, AWS, and Linux. I also leverage AI tools to
                            boost productivity through prompt engineering. I’m
                            an adaptable learner and thrive in collaborative
                            environments to build outstanding apps.
                        </p>

                        <motion.a
                            animate={{ y: [-10, 10, -10] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                            }}
                            href="https://flowcv.com/resume/su0w02va2ho5"
                            target="_blank"
                            className="
    mt-8 inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-xl
    font-semibold text-white
    bg-gradient-to-r from-violet-500 to-fuchsia-500
    hover:from-violet-600 hover:to-fuchsia-600
    shadow-md hover:shadow-lg
    transition
    focus:outline-none focus:ring-2 focus:ring-violet-300 dark:focus:ring-fuchsia-400/40
    md:w-[300px]
  "
                        >
                            <span className="text-lg font-bold">
                                Check Resume
                            </span>
                        </motion.a>
                    </div>

                    {/* Right Column (Image) */}
                    <div className="relative order-first lg:order-last flex justify-center items-center">
                        <div className="relative max-w-md mx-auto">
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10 dark:ring-white/10">
                                <Image
                                    width={500}
                                    height={500}
                                    src={trapic}
                                    alt="Profile"
                                    placeholder="blur"
                                    blurDataURL="/path/to/small-image.jpg"
                                    className="w-[320px] h-[320px] md:w-full md:h-full object-cover rounded-3xl"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                            </div>

                            {/* glass badges */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                }}
                                className="
                  absolute -right-4 -top-4 md:-right-8 md:-top-6
                  p-3 rounded-xl shadow-lg
                  border border-slate-200 dark:border-white/10
                  bg-white/60 dark:bg-white/5 backdrop-blur-md
                "
                            >
                                <span className="text-sm font-medium text-slate-800 dark:text-white">
                                    🚀 Open to Work
                                </span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                }}
                                className="
                  absolute -left-4 -bottom-4 md:-left-10 md:-bottom-6
                  p-3 rounded-xl shadow-lg
                  border border-slate-200 dark:border-white/10
                  bg-white/60 dark:bg-white/5 backdrop-blur-md
                "
                            >
                                <span className="text-sm font-medium text-slate-800 dark:text-white whitespace-nowrap">
                                    💻 Full-Stack Developer
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Scroll hint */}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
                >
                    <span className="text-sm text-slate-500 dark:text-white/60">
                        Scroll to Explore
                    </span>
                    <ChevronDown className="w-6 h-6 text-slate-500 dark:text-white/60" />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;

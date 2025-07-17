"use client";
import Image from "next/image";
import trapic from "./assets/traaqq.jpg";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center justify-center text-start overflow-hidden">
            <div className="w-full md:max-w-7xl mx-auto px-6 py-12 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/*Left Coloum*/}
                    <div className="inline-block px-4 py-2 backdrop-blur-sm  rounded-full text-sm font-medium">
                        <span>👋 Welcome to my portfolio</span>
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold py-4">
                                Hi, Leng Sopheaktra
                            </h1>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                                Full-Stack Developer
                            </h2>
                            <p className="py-6 text-base">
                                I’m a software engineer with a passion for
                                developing dynamic and user-friendly web
                                applications.
                                <br /> My primary expertise is in JavaScript,
                                but I also work with Python, PHP, and other
                                programming languages. I manage deployments and
                                have solid DevOps experience with tools like
                                Docker, Jenkins, GitHub Actions, AWS, and Linux.
                                Additionally, I leverage AI tools to enhance
                                productivity through prompt engineering. <br />
                                I’m an adaptable learner, always eager to grow
                                my skill set, and I thrive in collaborative
                                environments to build outstanding applications.
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
                                className="px-6 py-3  rounded-xl   duration-300 flex items-center justify-center gap-2 border border-[#33353F] bg-purple-500 hover:bg-purple-600 md:w-[300px]"
                            >
                                <p className="text-lg font-bold">
                                    Check Resume
                                </p>
                            </motion.a>
                        </div>
                    </div>

                    <div className=" relative order-first lg:order-last flex justify-center items-center ">
                        {/*Right Coloum*/}
                        <div className="relative max-w-md mx-auto">
                            <div className="relative aspect-square rounded-3xl overflow-hidden from-primary/10 to-purple-500/10 backdrop-blur-sm shadow-2xl">
                                <Image
                                    width={500}
                                    height={500}
                                    src={trapic}
                                    alt="Profile"
                                    placeholder="blur"
                                    blurDataURL="/path/to/small-image.jpg"
                                    className="w-[350px] h-[350px] md:w-full md:h-full object-cover rounded-3xl"
                                />
                            </div>
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut",
                                }}
                                className="absolute -right-5 top-[-20px] md:-right-10 md:-top-6 bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border"
                            >
                                <span className="text-sm font-medium">
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
                                className="absolute -left-5 md:-left-12 b -bottom-6 bg-background/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border"
                            >
                                <span className="text-sm font-medium whitespace-nowrap">
                                    💻 Full Stack Developer
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
                {/* Scoll*/}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-0 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
                >
                    <span className="text-sm text-muted-foreground">
                        Scoll to Explore
                    </span>
                    <ChevronDown className="w-6 h-6 text-muted-foreground" />
                </motion.div>
            </div>
        </section>
    );
};
export default HeroSection;

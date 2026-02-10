"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type AnimatedMarkerProps = {
    delay?: number;
    className?: string;
};

const cx = (...c: Array<string | false | null | undefined>) =>
    c.filter(Boolean).join(" ");

export default function AnimatedMarker({
    delay = 0,
    className,
}: AnimatedMarkerProps) {
    const reduce = useReducedMotion();

    return (
        <div className={cx("relative flex h-full w-6 flex-col items-center", className)}>
            {reduce ? (
                <>
                    <span className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-300/70 to-transparent dark:via-white/30" />
                    <span className="relative z-10 mt-1.5 h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-white/70" />
                </>
            ) : (
                <>
                    <motion.span
                        className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-300/70 to-transparent dark:via-white/30"
                        style={{ transformOrigin: "top" }}
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                            delay,
                        }}
                    />
                    <motion.span
                        className="absolute inset-y-0 left-1/2 w-[6px] -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-200/40 to-transparent dark:via-white/15 blur-[4px]"
                        style={{ transformOrigin: "top" }}
                        initial={{ scaleY: 0, opacity: 0 }}
                        whileInView={{ scaleY: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.9,
                            ease: "easeOut",
                            delay: delay + 0.05,
                        }}
                    />
                    <motion.span
                        className="relative z-10 mt-1.5 h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-white/70"
                        initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: delay + 0.1,
                        }}
                    />
                </>
            )}
        </div>
    );
}

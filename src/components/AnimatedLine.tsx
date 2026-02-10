"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type AnimatedLineProps = {
    delay?: number;
    duration?: number;
    className?: string;
    color?: string;
};

const cx = (...c: Array<string | false | null | undefined>) =>
    c.filter(Boolean).join(" ");

export default function AnimatedLine({
    delay = 0,
    duration = 0.6,
    className,
    color = "#854CE6",
}: AnimatedLineProps) {
    const reduce = useReducedMotion();

    return (
        <motion.span
            className={cx("w-[2px] flex-1 rounded-full", className)}
            style={{ background: color, transformOrigin: "top" }}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: reduce ? 0.01 : duration,
                ease: "easeOut",
                delay: reduce ? 0 : delay,
            }}
        />
    );
}

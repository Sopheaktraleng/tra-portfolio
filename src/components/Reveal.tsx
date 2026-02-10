"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type RevealProps = {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    duration?: number;
    once?: boolean;
    className?: string;
};

const cx = (...c: Array<string | false | null | undefined>) =>
    c.filter(Boolean).join(" ");

export default function Reveal({
    children,
    delay = 0,
    y = 16,
    duration = 0.55,
    once = true,
    className,
}: RevealProps) {
    const reduce = useReducedMotion();

    return (
        <motion.div
            className={cx(className)}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
            whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once, amount: 0.2 }}
            transition={{
                duration: reduce ? 0.01 : duration,
                delay: reduce ? 0 : delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}

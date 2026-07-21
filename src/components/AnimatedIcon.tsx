"use client";

import React, { ElementType } from "react";
import { motion, HTMLMotionProps, TargetAndTransition, Transition } from "framer-motion";
import { cn } from "@/lib/cn";

export type IconAnimationType =
    | "bounce"
    | "wiggle"
    | "pulse"
    | "spin"
    | "float"
    | "scale"
    | "flip"
    | "shake"
    | "nudgeRight"
    | "nudgeDown"
    | "glow";

export type IconTriggerType = "hover" | "tap" | "loop" | "view";

interface AnimatedIconProps extends HTMLMotionProps<"div"> {
    /** The Icon component to render (Lucide, Heroicon, SVG, etc.) */
    icon?: ElementType;
    /** Children can be passed instead of icon prop */
    children?: React.ReactNode;
    /** Animation preset */
    animation?: IconAnimationType;
    /** Trigger mode: 'hover' (default), 'tap', 'loop', 'view' */
    trigger?: IconTriggerType;
    /** Additional CSS classes for wrapper */
    className?: string;
    /** Size of icon if icon prop is provided */
    size?: number | string;
    /** Custom stroke width for SVG/Lucide icons */
    strokeWidth?: number;
    /** Color override */
    color?: string;
}

const animationVariants: Record<IconAnimationType, {
    hover?: TargetAndTransition;
    tap?: TargetAndTransition;
    animate?: TargetAndTransition;
    transition?: Transition;
}> = {
    bounce: {
        hover: { y: [0, -6, 0, -3, 0] },
        tap: { y: 2, scale: 0.95 },
        animate: { y: [0, -6, 0, -3, 0] },
        transition: { duration: 0.6, ease: "easeOut" },
    },
    wiggle: {
        hover: { rotate: [0, -14, 14, -8, 8, 0], scale: 1.1 },
        tap: { scale: 0.9 },
        animate: { rotate: [0, -10, 10, -5, 5, 0] },
        transition: { duration: 0.5, ease: "easeInOut" },
    },
    pulse: {
        hover: { scale: [1, 1.18, 1, 1.12, 1] },
        tap: { scale: 0.92 },
        animate: { scale: [1, 1.15, 1] },
        transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
    },
    spin: {
        hover: { rotate: 360, scale: 1.1 },
        tap: { scale: 0.9 },
        animate: { rotate: 360 },
        transition: { duration: 0.6, ease: "easeInOut" },
    },
    float: {
        animate: { y: [0, -5, 0] },
        hover: { y: -8, scale: 1.1 },
        transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
    },
    scale: {
        hover: { scale: 1.2, rotate: 3 },
        tap: { scale: 0.9 },
        animate: { scale: [1, 1.08, 1] },
        transition: { type: "spring", stiffness: 400, damping: 17 },
    },
    flip: {
        hover: { rotateY: 180, scale: 1.1 },
        tap: { scale: 0.9 },
        animate: { rotateY: 180 },
        transition: { duration: 0.5, ease: "easeInOut" },
    },
    shake: {
        hover: { x: [0, -4, 4, -4, 4, 0] },
        tap: { scale: 0.9 },
        animate: { x: [0, -4, 4, -4, 4, 0] },
        transition: { duration: 0.4, ease: "easeInOut" },
    },
    nudgeRight: {
        hover: { x: [0, 5, 2, 4, 0], scale: 1.05 },
        tap: { x: 2 },
        animate: { x: [0, 4, 0] },
        transition: { duration: 0.4, ease: "easeInOut" },
    },
    nudgeDown: {
        hover: { y: [0, 5, 2, 4, 0], scale: 1.05 },
        tap: { y: 2 },
        animate: { y: [0, 4, 0] },
        transition: { duration: 0.4, ease: "easeInOut" },
    },
    glow: {
        hover: { scale: 1.15, filter: "drop-shadow(0px 0px 8px rgba(168, 85, 247, 0.6))" },
        tap: { scale: 0.95 },
        animate: { filter: ["drop-shadow(0px 0px 2px rgba(168, 85, 247, 0.3))", "drop-shadow(0px 0px 10px rgba(168, 85, 247, 0.7))", "drop-shadow(0px 0px 2px rgba(168, 85, 247, 0.3))"] },
        transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
    },
};

export function AnimatedIcon({
    icon: IconComponent,
    children,
    animation = "scale",
    trigger = "hover",
    className,
    size,
    strokeWidth,
    color,
    ...restProps
}: AnimatedIconProps) {
    const config = animationVariants[animation];

    const motionProps: HTMLMotionProps<"div"> = {
        className: cn("inline-flex items-center justify-center relative", className),
        ...restProps,
    };

    if (trigger === "hover") {
        motionProps.whileHover = config.hover;
        motionProps.whileTap = config.tap;
        motionProps.transition = config.transition;
    } else if (trigger === "loop") {
        motionProps.animate = config.animate;
        motionProps.transition = config.transition;
        motionProps.whileHover = config.hover;
    } else if (trigger === "tap") {
        motionProps.whileTap = config.tap || { scale: 0.9 };
        motionProps.transition = config.transition;
    } else if (trigger === "view") {
        motionProps.whileInView = config.hover || config.animate;
        motionProps.viewport = { once: true, margin: "-50px" };
        motionProps.transition = config.transition;
    }

    return (
        <motion.div {...motionProps}>
            {IconComponent ? (
                <IconComponent
                    size={size}
                    strokeWidth={strokeWidth}
                    color={color}
                    className="w-full h-full"
                />
            ) : (
                children
            )}
        </motion.div>
    );
}

/** Specialized Social Link Icon with custom gradient hover ring & animation */
export function AnimatedSocialIcon({
    icon: IconComponent,
    animation = "wiggle",
    href,
    ariaLabel,
    className,
}: {
    icon: ElementType;
    animation?: IconAnimationType;
    href: string;
    ariaLabel: string;
    className?: string;
}) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={cn(
                "group relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200/80 dark:border-slate-700/60 shadow-sm transition-colors duration-200 flex items-center justify-center",
                className
            )}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
        >
            <AnimatedIcon animation={animation} trigger="hover" className="w-5 h-5">
                <IconComponent className="w-5 h-5" />
            </AnimatedIcon>
        </motion.a>
    );
}

/** Specialized Action Button Icon with Arrow/Download directional micro-interactions */
export function AnimatedButtonIcon({
    icon: IconComponent,
    direction = "right",
    className,
}: {
    icon: ElementType;
    direction?: "right" | "down" | "up" | "spin";
    className?: string;
}) {
    const animationMap: Record<string, IconAnimationType> = {
        right: "nudgeRight",
        down: "nudgeDown",
        up: "bounce",
        spin: "spin",
    };

    return (
        <AnimatedIcon
            icon={IconComponent}
            animation={animationMap[direction] || "nudgeRight"}
            trigger="hover"
            className={cn("w-4 h-4 transition-transform", className)}
        />
    );
}

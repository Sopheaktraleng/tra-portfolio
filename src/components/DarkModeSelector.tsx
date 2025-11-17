"use client";

import { useEffect, useState, Fragment, JSX } from "react";
import {
    SunIcon,
    MoonIcon,
    ComputerDesktopIcon,
    CheckIcon,
    ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

type ThemeId = "light" | "dark" | "system";

const OPTIONS: {
    id: ThemeId;
    name: string;
    icon: JSX.Element;
    hint?: string;
}[] = [
    { id: "light", name: "Light", icon: <SunIcon className="size-5" /> },
    { id: "dark", name: "Dark", icon: <MoonIcon className="size-5" /> },
    {
        id: "system",
        name: "System",
        icon: <ComputerDesktopIcon className="size-5" />,
    },
];

export default function DarkModeSelector() {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [value, setValue] = useState<ThemeId>("system");

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (!mounted) return;
        const initial = (theme as ThemeId) ?? "system";
        setValue(initial);
    }, [mounted, theme]);

    if (!mounted) return null;

    const current =
        OPTIONS.find((o) => o.id === value) ??
        OPTIONS.find((o) => o.id === "system")!;

    const ActiveIcon =
        resolvedTheme === "dark" ? (
            <MoonIcon className="size-5" />
        ) : (
            <SunIcon className="size-5" />
        );

    return (
        <Listbox
            value={value}
            onChange={(v: ThemeId) => {
                setValue(v);
                setTheme(v);
            }}
        >
            {({ open }) => (
                <div className="relative">
                    <Listbox.Button
                        className={classNames(
                            "inline-flex items-center gap-2 rounded-full",
                            "px-3 py-1.5 text-sm font-medium",
                            "border border-black/10 dark:border-white/15",
                            "bg-white/60 dark:bg-white/10 backdrop-blur-md",
                            "text-slate-900 dark:text-white",
                            "shadow-sm hover:shadow transition",
                            "focus:outline-none focus:ring-2 focus:ring-violet-300/60 dark:focus:ring-fuchsia-400/40"
                        )}
                        aria-label={`Theme: ${current.name}`}
                    >
                        <span className="grid place-items-center">
                            {ActiveIcon}
                        </span>
                        <span className="hidden sm:inline">{current.name}</span>
                        <ChevronDownIcon
                            className="size-4 opacity-70"
                            aria-hidden="true"
                        />
                    </Listbox.Button>

                    <Transition
                        as={Fragment}
                        show={open}
                        enter="transition ease-out duration-100"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Listbox.Options
                            className={classNames(
                                "absolute right-0 z-50 mt-2 w-44 overflow-hidden",
                                "rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur",
                                "ring-1 ring-slate-900/10 dark:ring-white/10 shadow-lg p-1"
                            )}
                        >
                            {OPTIONS.map((opt) => (
                                <Listbox.Option
                                    key={opt.id}
                                    value={opt.id}
                                    className={({ active }) =>
                                        classNames(
                                            "flex items-center justify-between gap-2 cursor-pointer select-none",
                                            "rounded-lg px-3 py-2",
                                            active
                                                ? "bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10"
                                                : ""
                                        )
                                    }
                                >
                                    {({ selected }) => (
                                        <>
                                            <div className="flex items-center gap-3">
                                                <span className="text-slate-700 dark:text-slate-200">
                                                    {opt.icon}
                                                </span>
                                                <div className="flex flex-col">
                                                    <span
                                                        className={classNames(
                                                            "text-sm",
                                                            selected
                                                                ? "text-violet-700 dark:text-violet-300 font-semibold"
                                                                : "text-slate-900 dark:text-slate-100"
                                                        )}
                                                    >
                                                        {opt.name}
                                                    </span>
                                                    {opt.hint && (
                                                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                                                            {opt.hint}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <span
                                                className={classNames(
                                                    "ml-3",
                                                    selected
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            >
                                                <CheckIcon className="size-4 text-violet-600 dark:text-violet-300" />
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            )}
        </Listbox>
    );
}

"use client";

import { useState, useEffect } from "react";
import {
    SunIcon,
    MoonIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

type ThemeOption = {
    id: string;
    name: string;
    icon: React.ReactNode;
};

const themeOptions: ThemeOption[] = [
    {
        id: "light",
        name: "Light",
        icon: <SunIcon className="size-5" />,
    },
    {
        id: "dark",
        name: "Dark",
        icon: <MoonIcon className="size-5" />,
    },
    {
        id: "system",
        name: "System",
        icon: <ComputerDesktopIcon className="size-5" />,
    },
];

export default function DarkModeSelector() {
    const [selected, setSelected] = useState<ThemeOption | null>(null);
    const { setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (selected?.id === "system") {
            setTheme("system");
            setSelected(themeOptions[2]);
        } else if (selected?.id === "dark") {
            setTheme("dark");
            setSelected(themeOptions[1]);
        } else if (selected?.id === "light") {
            setTheme("light");
            setSelected(themeOptions[0]);
        }
    }, [selected, setTheme]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    } else {
        return (
            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <div className="relative">
                        <Listbox.Button className="flex items-center">
                            <MoonIcon
                                className="size-5 text-gray-900 dark:text-gray-50 hidden dark:inline"
                                aria-hidden="true"
                            />

                            <SunIcon
                                className="size-5 text-gray-900 dark:text-gray-50 dark:hidden"
                                aria-hidden="true"
                            />
                        </Listbox.Button>

                        <Transition
                            show={open}
                            enter="transition ease-out duration-100"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-50 top-full list-none right-0 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm dark:bg-slate-800 dark:ring-0 mt-8">
                                {themeOptions.map((themeOption) => (
                                    <Listbox.Option
                                        key={themeOption.id}
                                        className={({ active, selected }) =>
                                            classNames(
                                                active
                                                    ? "bg-gray-600/10 dark:bg-gray-600/30 text-purple-600 dark:text-purple-300"
                                                    : "text-gray-900 dark:text-gray-50",
                                                selected
                                                    ? "text-purple-600 dark:text-purple-300"
                                                    : "text-gray-900 dark:text-gray-50",
                                                "relative cursor-default py-2 pl-3 pr-9 ml-0"
                                            )
                                        }
                                        value={themeOption}
                                    >
                                        {({ selected }) => (
                                            <div className="py-1 px-2 flex items-center cursor-pointer">
                                                <span className="flex-shrink-0 mr-4 font-semibold">
                                                    {themeOption.icon}
                                                </span>
                                                <span
                                                    className={classNames(
                                                        selected
                                                            ? "font-semibold"
                                                            : "font-normal",
                                                        "ml-3 block"
                                                    )}
                                                >
                                                    {themeOption.name}
                                                </span>
                                            </div>
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
}

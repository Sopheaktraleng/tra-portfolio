import Link from "next/link";
import Image from "next/image";

import GithubIcon from "./../../public/icons/github-icon.svg";
import LinkedinIcon from "./../../public/icons/linkedin-icon.svg";
import FacebookIcon from "./../../public/icons/facebook-icon.svg";
import InstagramIcon from "./../../public/icons/instagram-icon.svg";

export const Footer = () => {
    return (
        <footer role="contentinfo" aria-label="Site footer" className="w-full">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent dark:via-fuchsia-500/40" />

            <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-5">
                <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-3">
                        <div
                            aria-hidden
                            className="size-8 md:size-9 rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 dark:from-violet-400/15 dark:to-fuchsia-400/15 border border-black/5 dark:border-white/10 backdrop-blur flex items-center justify-center"
                        >
                            <span className="text-[10px] md:text-xs font-semibold tracking-wide text-violet-700 dark:text-fuchsia-200">
                                LS
                            </span>
                        </div>
                        <div className="leading-tight">
                            <span className="block text-sm md:text-base font-semibold tracking-tight text-white/60">
                                Leng Sopheaktra
                            </span>
                            <span className="block text-[11px] text-white/60">
                                Full-Stack Developer
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <Social
                            href="https://www.facebook.com/leng.sopheaktra.71/"
                            label="Facebook"
                        >
                            <Image
                                src={FacebookIcon}
                                alt=""
                                aria-hidden
                                className="size-4"
                            />
                        </Social>
                        <Social
                            href="https://github.com/Sopheaktraleng"
                            label="GitHub"
                        >
                            <Image
                                src={GithubIcon}
                                alt=""
                                aria-hidden
                                className="size-4"
                            />
                        </Social>
                        <Social
                            href="https://instagram.com/traa__a"
                            label="Instagram"
                        >
                            <Image
                                src={InstagramIcon}
                                alt=""
                                aria-hidden
                                className="size-4"
                            />
                        </Social>
                        <Social
                            href="https://www.linkedin.com/in/leng-sopheaktra-828009321/"
                            label="LinkedIn"
                        >
                            <Image
                                src={LinkedinIcon}
                                alt=""
                                aria-hidden
                                className="size-4"
                            />
                        </Social>
                    </div>
                </div>

                <div className="mt-4 h-px w-full bg-black/[0.06] dark:bg-white/[0.10]" />

                <div className="mt-3 flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-between">
                    <nav
                        aria-label="Footer navigation"
                        className="flex items-center gap-2 text-[12px] text-slate-600 dark:text-white/70"
                    >
                        <FooterLink href="#projects">
                            <span className="px-2 py-1 rounded-md hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
                                Projects
                            </span>
                        </FooterLink>
                        <Dot />
                        <FooterLink href="#experience">
                            <span className="px-2 py-1 rounded-md hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
                                Experience
                            </span>
                        </FooterLink>
                        <Dot />
                        <FooterLink href="#contact">
                            <span className="px-2 py-1 rounded-md hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors">
                                Contact
                            </span>
                        </FooterLink>
                    </nav>

                    <p className="text-[11px] leading-tight text-slate-500 dark:text-white/60">
                        © {new Date().getFullYear()} Leng Sopheaktra. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

function Social({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    const external = /^https?:\/\//i.test(href);
    const cls =
        "inline-flex items-center justify-center size-8 rounded-xl " +
        "border border-black/10 dark:border-white/15 " +
        "bg-white/70 dark:bg-white/10 backdrop-blur " +
        "shadow-sm hover:shadow-md " +
        "transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 " +
        "focus:outline-none focus:ring-2 focus:ring-violet-300/70 dark:focus:ring-fuchsia-400/40 " +
        "motion-reduce:transition-none motion-reduce:hover:transform-none";

    return external ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cls}
        >
            {children}
            <span className="sr-only">{label}</span>
        </a>
    ) : (
        <Link href={href} className={cls} aria-label={label}>
            {children}
            <span className="sr-only">{label}</span>
        </Link>
    );
}

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    const external = /^https?:\/\//i.test(href);
    const cls =
        "underline-offset-4 hover:underline hover:text-slate-900 dark:hover:text-white " +
        "focus:outline-none focus:ring-2 focus:ring-violet-300/70 dark:focus:ring-fuchsia-400/40 rounded";
    return external ? (
        <a href={href} className={cls}>
            {children}
        </a>
    ) : (
        <Link href={href} className={cls}>
            {children}
        </Link>
    );
}

function Dot() {
    return (
        <span aria-hidden className="text-slate-400 dark:text-white/40">
            •
        </span>
    );
}

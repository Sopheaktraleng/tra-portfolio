import Link from "next/link";
import Image from "next/image";

import GithubIcon from "./../../public/github-icon.svg";
import LinkedinIcon from "./../../public/linkedin-icon.svg";
import FacebookIcon from "./../../public/facebook-icon.svg";
import InstagramIcon from "./../../public/instagram-icon.svg";

export const Footer = () => {
    return (
        <footer className="w-full">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent dark:via-fuchsia-500/40" />
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-3">
                <div className="text-center">
                    <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
                        Leng Sopheaktra
                    </span>
                    <p className="mt-0.5 text-[11px] text-slate-500 dark:text-white/60">
                        Full-Stack Developer
                    </p>
                </div>

                <div className="mt-2 flex items-center justify-center gap-2">
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

                <nav className="mt-2 flex items-center justify-center gap-3 text-[11px] text-slate-600 dark:text-white/70">
                    <FooterLink href="#projects">Projects</FooterLink>
                    <span className="text-slate-400 dark:text-white/40">•</span>
                    <FooterLink href="#experience">Experience</FooterLink>
                    <span className="text-slate-400 dark:text-white/40">•</span>
                    <FooterLink href="#contact">Contact</FooterLink>
                </nav>

                <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-white/50 leading-tight">
                    © {new Date().getFullYear()} Leng Sopheaktra. All rights
                    reserved.
                </p>
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
        "inline-flex items-center justify-center size-7 rounded-full " +
        "border border-black/10 dark:border-white/15 " +
        "bg-white/70 dark:bg-white/10 backdrop-blur " +
        "shadow-sm hover:shadow-md transition hover:-translate-y-0.5 " +
        "focus:outline-none focus:ring-2 focus:ring-violet-300/70 dark:focus:ring-fuchsia-400/40";

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
        "underline-offset-4 hover:underline hover:text-slate-900 dark:hover:text-white transition-colors";
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

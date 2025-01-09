import GithubIcon from "./../../public/github-icon.svg";
import LinkedinIcon from "./../../public/linkedin-icon.svg";
import FacebookIcon from "./../../public/facebook-icon.svg";
import InstagramIcon from "./../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
    return (
        <div className="container mx-auto px-6 text-center">
            <div className="flex flex-row justify-center gap-10 mb-4">
                <span>
                    <Link href="https://www.facebook.com/leng.sopheaktra.71/">
                        <Image src={FacebookIcon} alt="Facebook Icon" />
                    </Link>
                </span>
                <span>
                    <Link href="https://github.com/Sopheaktraleng">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                </span>
                <span>
                    <Link href="https://instagram.com/traa__a">
                        <Image src={InstagramIcon} alt="Instagram Icon" />
                    </Link>
                </span>
                <span>
                    <Link href="https://www.linkedin.com/in/leng-sopheaktra-828009321/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </span>
            </div>
            <p className="text-gray-400">
                © {new Date().getFullYear()} Leng Sopheaktra. All rights
                reserved.
            </p>
        </div>
    );
};

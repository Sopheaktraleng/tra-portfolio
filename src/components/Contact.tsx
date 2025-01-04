import { Eye, Facebook, Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">Let&apos;s Connect</h2>
                <p className="text-lg mb-8">
                    I&apos;m currently open to new opportunities and interesting
                    projects. Feel free to reach out!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <div className="p-6 rounded-xl shadow-lg border border-border">
                        <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                        <div>Email</div>
                        <a href="mailto:sopheaktraleng4@gmail.com">
                            sopheaktraleng4@gmail.com
                        </a>
                    </div>
                    <div className="p-6 rounded-xl shadow-lg border border-border">
                        <Facebook className="w-8 h-8 mx-auto mb-4" />
                        <div>Social Media</div>
                        <a
                            href="https://www.facebook.com/leng.sopheaktra.71/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Sopheaktra Leng
                        </a>
                    </div>
                </div>
                <div className="flex-row justify-center items-center space-x-6 rounded-lg gap-4">
                    <a
                        href="https://github.com/Sopheaktraleng"
                        className="inline-flex items-center px-6 py-3 rounded-lg  duration-300 border"
                    >
                        <Github className="w-8 h-8 mr-2" />
                        Github
                    </a>
                    <a className="inline-flex items-center px-6 py-3 rounded-lg  duration-300 border">
                        <Linkedin className="w-8 h-8 mr-2" />
                        Linkedin
                    </a>
                    <a className="inline-flex items-center px-6 py-3 rounded-lg  duration-300 border mt-4">
                        <Eye className="w-8 h-8 mr-2 " />
                        Veiw CV
                    </a>
                </div>
            </div>
        </section>
    );
};
export default Contact;

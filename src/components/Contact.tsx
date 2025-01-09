const Contact = () => {
    return (
        <section className="py-16 flex justify-center items-center">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">Contact</h2>
                <p className="text-lg mb-8 text-center">
                    Feel free to reach out to me for any questions or
                    opportunities!
                </p>
                <form
                    action=""
                    className="flex flex-col gap-4 rounded-lg p-10 w-[450px] md:w-[600px] border border-[#33353F]"
                >
                    <label
                        htmlFor="email"
                        className="font-bold text-lg text-start"
                    >
                        Email Me 🚀
                    </label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        placeholder="Email"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />

                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};
export default Contact;

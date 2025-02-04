"use client";

import { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Corrected payload
        const payload = { email, subject, message };

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await res.json();

            if (res.ok) {
                setStatus("✅ Email sent successfully!");
                setEmail("");
                setSubject("");
                setMessage("");
            } else {
                setStatus(`❌ Failed to send email: ${result.error}`);
            }
        } catch (error: any) {
            setStatus(`⚠️ Error: ${error.message}`);
        }
    };

    return (
        <section className="py-16 flex justify-center items-center">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
                <p className="text-lg mb-8 text-center">
                    Feel free to reach out for any questions or opportunities!
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 rounded-lg p-5 md:p-10 w-auto md:w-[600px] border border-[#33353F]"
                >
                    <label htmlFor="email" className="font-bold text-lg">
                        Email Me 🚀
                    </label>
                    <input
                        name="email"
                        type="email"
                        id="email"
                        required
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                    <input
                        name="subject"
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    />
                    <button
                        type="submit"
                        className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>
                </form>
                {status && <p className="mt-4 text-center">{status}</p>}
            </div>
        </section>
    );
};

export default Contact;

"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        interface EmailPayload {
            email: string;
            subject: string;
            message: string;
        }

        const payload: EmailPayload = { email, subject, message };

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
        } catch (error) {
            if (error instanceof Error) {
                setStatus(`⚠️ Error: ${error.message}`);
            } else {
                setStatus("⚠️ Unknown error occurred");
            }
        }
    };

    return (
        <section className="py-16 flex justify-center items-center">
            <div className="w-full max-w-3xl px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Contact
                    </h2>
                    <p className="text-lg mt-2 text-slate-700 dark:text-white/80">
                        Feel free to reach out for any questions or
                        opportunities!
                    </p>
                </div>

                {/* Card */}
                <form
                    onSubmit={handleSubmit}
                    className="
            mx-auto w-full rounded-2xl
            border border-slate-200 dark:border-white/10
            bg-white/70 dark:bg-white/5 backdrop-blur-md
            shadow-md dark:shadow-lg
            p-6 md:p-8
            transition
            focus-within:ring-2 focus-within:ring-slate-200 dark:focus-within:ring-white/10
          "
                >
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold mb-2"
                        >
                            Email <span className="text-rose-600">*</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            placeholder="you@example.com"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="
                w-full rounded-lg
                border border-slate-300 dark:border-white/10
                bg-white dark:bg-white/5
                text-slate-900 dark:text-white
                placeholder:text-slate-400 dark:placeholder:text-white/50
                text-sm px-3 py-2.5 outline-none
                transition
                focus:border-slate-400 dark:focus:border-slate-400
                focus:ring-2 focus:ring-slate-200 dark:focus:ring-white/10
              "
                        />
                        <p className="mt-1.5 text-xs text-slate-500 dark:text-white/50">
                            I’ll never share your email.
                        </p>
                    </div>

                    {/* Subject */}
                    <div className="mt-5">
                        <label
                            htmlFor="subject"
                            className="block text-sm font-semibold mb-2"
                        >
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            placeholder="How can I help?"
                            autoComplete="off"
                            maxLength={120}
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="
                w-full rounded-lg
                border border-slate-300 dark:border-white/10
                bg-white dark:bg-white/5
                text-slate-900 dark:text-white
                placeholder:text-slate-400 dark:placeholder:text-white/50
                text-sm px-3 py-2.5 outline-none
                transition
                focus:border-slate-400 dark:focus:border-slate-400
                focus:ring-2 focus:ring-slate-200 dark:focus:ring-white/10
              "
                        />
                        <div className="mt-1.5 flex justify-between text-xs">
                            <span className="text-slate-500 dark:text-white/50">
                                Keep it short & clear.
                            </span>
                            <span className="text-slate-400 dark:text-white/40">
                                {subject.length}/120
                            </span>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="mt-5">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Write your message here…"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={6}
                            className="
                w-full rounded-lg
                border border-slate-300 dark:border-white/10
                bg-white dark:bg-white/5
                text-slate-900 dark:text-white
                placeholder:text-slate-400 dark:placeholder:text-white/50
                text-sm px-3 py-2.5 outline-none resize-y
                transition
                focus:border-slate-400 dark:focus:border-slate-400
                focus:ring-2 focus:ring-slate-200 dark:focus:ring-white/10
              "
                        />
                        <div className="mt-1.5 text-xs text-slate-500 dark:text-white/50">
                            Tip: include relevant links or context to speed
                            things up.
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="
    mt-6 w-full inline-flex items-center justify-center gap-2
    rounded-lg px-4 py-2.5 text-sm font-semibold
    text-white
    bg-gradient-to-r from-violet-500 to-fuchsia-500
    hover:from-violet-600 hover:to-fuchsia-600
    shadow-md hover:shadow-lg
    transition
    focus:outline-none focus:ring-2 focus:ring-violet-300 dark:focus:ring-fuchsia-400/40
    active:scale-[.99]
  "
                    >
                        <Send className="w-4 h-4" />
                        Send Message
                    </button>
                </form>

                {/* Status */}
                {status && (
                    <div className="mt-4" aria-live="polite">
                        <p
                            className={`
                text-center text-sm font-medium
                ${
                    status.startsWith("✅")
                        ? "text-emerald-600 dark:text-emerald-400"
                        : ""
                }
                ${
                    status.startsWith("❌") || status.startsWith("⚠️")
                        ? "text-rose-600 dark:text-rose-400"
                        : ""
                }
              `}
                        >
                            {status}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Contact;

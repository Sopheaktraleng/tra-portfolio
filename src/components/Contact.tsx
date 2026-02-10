"use client";

import { useEffect, useMemo, useRef, useState, ReactNode } from "react";
import {
    Send,
    Mail,
    Type as TypeIcon,
    MessageSquare,
    Loader2,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const MAX_SUBJECT = 120;
const MAX_MESSAGE = 2000;

const Contact = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const [company, setCompany] = useState("");

    const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
    const topErrorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const d = JSON.parse(localStorage.getItem("contact-draft") || "{}");
        if (d.email) setEmail(d.email);
        if (d.subject) setSubject(d.subject);
        if (d.message) setMessage(d.message);
    }, []);
    useEffect(() => {
        const draft = { email, subject, message };
        localStorage.setItem("contact-draft", JSON.stringify(draft));
    }, [email, subject, message]);

    const errors = useMemo(() => {
        const e: Record<string, string> = {};
        if (!email.trim()) e.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            e.email = "Enter a valid email.";
        if (!message.trim()) e.message = "Message is required.";
        if (subject.length > MAX_SUBJECT)
            e.subject = `Subject ≤ ${MAX_SUBJECT} chars.`;
        if (message.length > MAX_MESSAGE)
            e.message = `Message ≤ ${MAX_MESSAGE} chars.`;
        return e;
    }, [email, subject, message]);

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("");

        if (!isValid || company) {
            setStatus("⚠️ Please fix errors and try again.");
            topErrorRef.current?.focus();
            return;
        }

        try {
            setLoading(true);
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, subject, message }),
            });
            const result = await res.json().catch(() => ({}));

            if (res.ok) {
                setStatus("✅ Email sent successfully!");
                setEmail("");
                setSubject("");
                setMessage("");
                localStorage.removeItem("contact-draft");
            } else {
                setStatus(`❌ Failed: ${result?.error ?? res.statusText}`);
            }
        } catch (err) {
            setStatus(
                err instanceof Error
                    ? `⚠️ Error: ${err.message}`
                    : "⚠️ Unknown error"
            );
        } finally {
            setLoading(false);
        }
    };

    const setTouchedField = (k: string) =>
        setTouched((t) => ({ ...t, [k]: true }));

    return (
        <section className="py-10 flex justify-center items-center">
            <div className="w-full max-w-2xl px-4">
                <div className="text-center mb-6">
                    <Reveal>
                        <h2 className="text-4xl font-bold mb-3 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                                Contact
                            </span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <p className="text-sm md:text-base mt-1 text-slate-700 dark:text-white/80">
                            Have a question or opportunity? Let’s connect.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={0.12}>
                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5 md:p-6 shadow-sm"
                    >
                        {status.startsWith("⚠️") && !isValid && (
                            <div
                                ref={topErrorRef}
                                tabIndex={-1}
                                className="mb-3 rounded-md border border-rose-200/60 dark:border-rose-400/20 bg-rose-50/70 dark:bg-rose-900/20 p-2.5 text-xs text-rose-700 dark:text-rose-300"
                                aria-live="assertive"
                            >
                                <ul className="list-disc ml-4">
                                    {errors.email && (
                                        <li>Email — {errors.email}</li>
                                    )}
                                    {errors.subject && (
                                        <li>Subject — {errors.subject}</li>
                                    )}
                                    {errors.message && (
                                        <li>Message — {errors.message}</li>
                                    )}
                                </ul>
                            </div>
                        )}

                        <input
                            type="text"
                            name="company"
                            className="hidden"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            aria-hidden="true"
                            tabIndex={-1}
                        />

                        <Field
                            id="email"
                            label={
                                <>
                                    Email{" "}
                                    <span className="text-rose-600">*</span>
                                </>
                            }
                            error={touched.email ? errors.email : undefined}
                        >
                            <IconInput
                                id="email"
                                type="email"
                                value={email}
                                onChange={(v) => setEmail(v)}
                                placeholder="you@example.com"
                                icon={<Mail className="w-4 h-4" aria-hidden />}
                                onBlur={() => setTouchedField("email")}
                            />
                        </Field>

                        <div className="mt-4">
                            <Field
                                id="subject"
                                label="Subject"
                                error={
                                    touched.subject ? errors.subject : undefined
                                }
                            >
                                <IconInput
                                    id="subject"
                                    type="text"
                                    value={subject}
                                    onChange={(v) => setSubject(v)}
                                    placeholder="How can I help?"
                                    maxLength={MAX_SUBJECT}
                                    icon={
                                        <TypeIcon
                                            className="w-4 h-4"
                                            aria-hidden
                                        />
                                    }
                                    onBlur={() => setTouchedField("subject")}
                                />
                                <div className="mt-1 flex justify-between text-[11px] text-slate-500 dark:text-white/50">
                                    <span>Keep it short & clear.</span>
                                    <span className="text-slate-400 dark:text-white/40">
                                        {subject.length}/{MAX_SUBJECT}
                                    </span>
                                </div>
                            </Field>
                        </div>

                        <div className="mt-4">
                            <Field
                                id="message"
                                label={
                                    <>
                                        Message{" "}
                                        <span className="text-rose-600">*</span>
                                    </>
                                }
                                error={
                                    touched.message ? errors.message : undefined
                                }
                            >
                                <IconTextarea
                                    id="message"
                                    value={message}
                                    onChange={(v) => setMessage(v)}
                                    placeholder="Write your message…"
                                    rows={5}
                                    maxLength={MAX_MESSAGE}
                                    icon={
                                        <MessageSquare
                                            className="w-4 h-4"
                                            aria-hidden
                                        />
                                    }
                                    onBlur={() => setTouchedField("message")}
                                />
                                <div className="mt-1 flex justify-between text-[11px] text-slate-500 dark:text-white/50">
                                    <span>
                                        Include links or context if needed.
                                    </span>
                                    <span className="text-slate-400 dark:text-white/40">
                                        {message.length}/{MAX_MESSAGE}
                                    </span>
                                </div>
                            </Field>
                        </div>

                        <button
                            id="contact-submit"
                            type="submit"
                            disabled={!isValid || loading}
                            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 shadow-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <Send className="w-4 h-4" />
                            )}
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </Reveal>

                {status && (
                    <p
                        className={`
              mt-3 text-center text-xs font-medium
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
                        aria-live="polite"
                    >
                        {status}
                    </p>
                )}
            </div>
        </section>
    );
};

export default Contact;
interface FieldProps {
    id: string;
    label: ReactNode;
    error?: string;
    children: ReactNode;
}

function Field({ id, label, error, children }: FieldProps) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium mb-1.5">
                {label}
            </label>
            {children}
            {error && (
                <p className="mt-1 text-[11px] text-rose-600 dark:text-rose-400">
                    {error}
                </p>
            )}
        </div>
    );
}

interface IconInputProps {
    id: string;
    type: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    maxLength?: number;
    icon: ReactNode;
    onBlur?: () => void;
}

function IconInput({
    id,
    type,
    value,
    onChange,
    placeholder,
    maxLength,
    icon,
    onBlur,
}: IconInputProps) {
    return (
        <div className="relative">
            <span className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400">
                {icon}
            </span>
            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                placeholder={placeholder}
                maxLength={maxLength}
                className="w-full rounded-md pl-8 border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/50 text-sm px-2 py-2 outline-none transition focus:border-slate-400 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-200 dark:focus:ring-white/10"
            />
        </div>
    );
}

interface IconTextareaProps {
    id: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    rows?: number;
    maxLength?: number;
    icon: ReactNode;
    onBlur?: () => void;
}

function IconTextarea({
    id,
    value,
    onChange,
    placeholder,
    rows,
    maxLength,
    icon,
    onBlur,
}: IconTextareaProps) {
    return (
        <div className="relative">
            <span className="pointer-events-none absolute left-2.5 top-2.5 text-slate-400">
                {icon}
            </span>
            <textarea
                id={id}
                name={id}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                placeholder={placeholder}
                rows={rows}
                maxLength={maxLength}
                className="w-full rounded-md pl-8 border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/50 text-sm px-2 py-2 outline-none resize-y transition focus:border-slate-400 dark:focus:border-slate-400 focus:ring-1 focus:ring-slate-200 dark:focus:ring-white/10"
            />
        </div>
    );
}

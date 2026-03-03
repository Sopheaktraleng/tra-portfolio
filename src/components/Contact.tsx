"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import {
    Send,
    Mail,
    Type as TypeIcon,
    MessageSquare,
    Loader2,
    CheckCircle2,
    AlertTriangle,
    XCircle,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const MAX_SUBJECT = 120;
const MAX_MESSAGE = 2000;

const STATUS_META = {
    success: {
        Icon: CheckCircle2,
        className:
            "border-emerald-200/80 dark:border-emerald-400/30 bg-emerald-50/80 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-200",
        live: "polite",
    },
    error: {
        Icon: XCircle,
        className:
            "border-rose-200/80 dark:border-rose-400/30 bg-rose-50/80 dark:bg-rose-900/20 text-rose-700 dark:text-rose-200",
        live: "assertive",
    },
    warning: {
        Icon: AlertTriangle,
        className:
            "border-amber-200/80 dark:border-amber-400/30 bg-amber-50/80 dark:bg-amber-900/20 text-amber-700 dark:text-amber-200",
        live: "assertive",
    },
} as const;

type StatusType = keyof typeof STATUS_META;
type Status = { type: StatusType; message: string };

const Contact = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<Status | null>(null);
    const [company, setCompany] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [touched, setTouched] = useState<Record<string, boolean>>({});
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

    const emailTrim = email.trim();
    const subjectTrim = subject.trim();
    const messageTrim = message.trim();

    const errors = useMemo(() => {
        const e: Record<string, string> = {};
        if (!emailTrim) e.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim))
            e.email = "Enter a valid email.";
        if (!messageTrim) e.message = "Message is required.";
        else if (messageTrim.length > MAX_MESSAGE)
            e.message = `Message ≤ ${MAX_MESSAGE} chars.`;
        if (subjectTrim.length > MAX_SUBJECT)
            e.subject = `Subject ≤ ${MAX_SUBJECT} chars.`;
        return e;
    }, [emailTrim, subjectTrim, messageTrim]);

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(null);
        setSubmitted(true);
        setTouched((t) => ({
            ...t,
            email: true,
            subject: true,
            message: true,
        }));

        if (!isValid || company) {
            setStatus({
                type: "warning",
                message: "Please fix the highlighted fields and try again.",
            });
            topErrorRef.current?.focus();
            return;
        }

        try {
            setLoading(true);
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: emailTrim,
                    subject: subjectTrim,
                    message: messageTrim,
                }),
            });
            const result = await res.json().catch(() => ({}));

            if (res.ok) {
                setStatus({
                    type: "success",
                    message: "Thanks! Your message has been sent.",
                });
                setEmail("");
                setSubject("");
                setMessage("");
                setTouched({});
                setSubmitted(false);
                localStorage.removeItem("contact-draft");
            } else {
                setStatus({
                    type: "error",
                    message:
                        result?.error ??
                        (res.statusText
                            ? `Failed to send: ${res.statusText}`
                            : "Failed to send. Please try again."),
                });
            }
        } catch (err) {
            setStatus({
                type: "error",
                message:
                    err instanceof Error
                        ? err.message
                        : "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    const setTouchedField = (k: string) =>
        setTouched((t) => ({ ...t, [k]: true }));

    const emailError = touched.email || submitted ? errors.email : undefined;
    const subjectError = touched.subject || submitted ? errors.subject : undefined;
    const messageError = touched.message || submitted ? errors.message : undefined;
    const emailErrorId = emailError ? "email-error" : undefined;
    const subjectErrorId = subjectError ? "subject-error" : undefined;
    const messageErrorId = messageError ? "message-error" : undefined;

    const statusMeta = status ? STATUS_META[status.type] : null;
    const StatusIcon = statusMeta?.Icon;
    const showSubmitErrors = submitted && !isValid;

    return (
        <section className="py-10 flex justify-center items-center">
            <div className="w-full max-w-3xl px-4">
                <div className="text-center mb-7 md:mb-8">
                    <Reveal>
                        <h2 className="section-title">
                            <span className="section-title-gradient">
                                Contact
                            </span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <p className="section-subtitle">
                            Have a question or opportunity? Let’s connect.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={0.12}>
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="glass-panel p-5 md:p-6 text-left"
                        >
                        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-white/50">
                            <span>Fields marked with * are required.</span>
                            <span className="inline-flex items-center gap-1">
                                <MessageSquare
                                    className="h-3 w-3"
                                    aria-hidden
                                />
                                Share as much context as you can.
                            </span>
                        </div>

                        {showSubmitErrors && (
                            <div
                                ref={topErrorRef}
                                tabIndex={-1}
                                role="alert"
                                className="mt-4 rounded-lg border border-rose-200/70 dark:border-rose-400/20 bg-rose-50/80 dark:bg-rose-900/20 p-3 text-xs text-rose-700 dark:text-rose-200"
                            >
                                <p className="font-semibold mb-1">
                                    Please fix the following:
                                </p>
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

                        <div className="mt-4 grid gap-4">
                            <Field
                                id="email"
                                label={
                                    <>
                                        Email{" "}
                                        <span className="text-rose-600">*</span>
                                    </>
                                }
                                error={emailError}
                                errorId={emailErrorId}
                            >
                                <IconInput
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(v) => setEmail(v)}
                                    placeholder="you@example.com"
                                    icon={<Mail className="w-4 h-4" aria-hidden />}
                                    onBlur={() => setTouchedField("email")}
                                    ariaDescribedBy={emailErrorId}
                                    invalid={Boolean(emailError)}
                                />
                            </Field>

                            <Field
                                id="subject"
                                label="Subject"
                                error={subjectError}
                                errorId={subjectErrorId}
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
                                    ariaDescribedBy={subjectErrorId}
                                    invalid={Boolean(subjectError)}
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
                                error={messageError}
                                errorId={messageErrorId}
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
                                    ariaDescribedBy={messageErrorId}
                                    invalid={Boolean(messageError)}
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
                            disabled={loading}
                            className="mt-5 w-full btn-primary rounded-md px-3 py-2 text-sm font-semibold shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <Send className="w-4 h-4" />
                            )}
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {status && statusMeta && StatusIcon && (
                            <div
                                className={`mt-4 flex items-start gap-2 rounded-lg border px-3 py-2 text-xs ${statusMeta.className}`}
                                aria-live={statusMeta.live}
                                role={
                                    status.type === "success" ? "status" : "alert"
                                }
                            >
                                <StatusIcon
                                    className="mt-0.5 h-4 w-4"
                                    aria-hidden
                                />
                                <span>{status.message}</span>
                            </div>
                        )}
                    </form>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;

interface FieldProps {
    id: string;
    label: ReactNode;
    error?: string;
    errorId?: string;
    children: ReactNode;
}

function Field({ id, label, error, errorId, children }: FieldProps) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium mb-1.5">
                {label}
            </label>
            {children}
            {error && (
                <p
                    id={errorId}
                    className="mt-1 text-[11px] text-rose-600 dark:text-rose-400"
                >
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
    ariaDescribedBy?: string;
    invalid?: boolean;
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
    ariaDescribedBy,
    invalid,
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
                aria-invalid={invalid}
                aria-describedby={ariaDescribedBy}
                data-invalid={invalid ? "true" : "false"}
                className="form-input"
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
    ariaDescribedBy?: string;
    invalid?: boolean;
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
    ariaDescribedBy,
    invalid,
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
                aria-invalid={invalid}
                aria-describedby={ariaDescribedBy}
                data-invalid={invalid ? "true" : "false"}
                className="form-textarea"
            />
        </div>
    );
}

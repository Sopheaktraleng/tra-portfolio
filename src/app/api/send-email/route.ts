import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "sopheaktraleng4@gmail.com";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
    // Instantiate inside the handler so the module loads safely at build time
    // even when RESEND_API_KEY is not set in the local environment.
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await req.json();
        const { email, subject, message } = body as {
            email?: string;
            subject?: string;
            message?: string;
        };

        // Server-side validation
        if (!email?.trim() || !message?.trim()) {
            return NextResponse.json(
                { error: "Email and message are required." },
                { status: 400 }
            );
        }

        if (!EMAIL_REGEX.test(email.trim())) {
            return NextResponse.json(
                { error: "Please provide a valid email address." },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: RECIPIENT_EMAIL,
            subject: subject?.trim() || "(No Subject)",
            html: message.trim(),
            replyTo: email.trim(),
        });

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error: unknown) {
        const message =
            error instanceof Error ? error.message : "An unknown error occurred";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

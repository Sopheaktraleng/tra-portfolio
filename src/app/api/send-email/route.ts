import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "Missing RESEND_API_KEY" },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);
        const { email, subject, message } = await req.json();

        if (!email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "sopheaktraleng4@gmail.com",
            subject: subject || "No Subject",
            html: message,
            replyTo: email,
        });
        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json(
                { error: "An unknown error occurred" },
                { status: 500 }
            );
        }
    }
}

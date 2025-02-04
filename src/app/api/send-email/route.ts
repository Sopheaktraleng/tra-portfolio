import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
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
    } catch (error: any) {
        return NextResponse.json(
            { error: error?.message || "Something went wrong" },
            { status: 500 }
        );
    }
}

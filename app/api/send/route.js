// import { EmailTemplate } from "@/components/EmailTemplate/email-template";
import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("body", body);
        const { email, name, subject, message } = body;
        const data = await resend.emails.send({
            from: email,
            to: "mahendrasutar811@gmail.com",
            // reply_to: "mahendrasutar811@gmail.com",
            subject: subject,
            react: EmailTemplate({ senderName: name, messageBody: message }),
        });

        if (data.status === "success") {
            return NextResponse.json({ message: "Email Successfully Sent!" });
        }
        return NextResponse.json(data);
    } catch (error) {
        console.log("error", error);
    }
}

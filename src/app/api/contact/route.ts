import { NextResponse } from "next/server";
import { submitContactMessage } from "@/actions/contact";

export async function POST(req: Request) {
    const formData = await req.formData();

    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phone")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    // ✅ Basic validation
    if (!name || name.length < 2) {
        return NextResponse.json({ success: false, error: "invalid_name" }, { status: 400 });
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json({ success: false, error: "invalid_email" }, { status: 400 });
    }
    if (!message || message.length < 10) {
        return NextResponse.json({ success: false, error: "invalid_message" }, { status: 400 });
    }

    try {
        const result = await submitContactMessage({ name, email, phone, message });

        if (!result.success) {
            return NextResponse.json({ success: false, error: "submission_failed" }, { status: 500 });
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Unexpected error:", error);
        return NextResponse.json({ success: false, error: "server_error" }, { status: 500 });
    }
}

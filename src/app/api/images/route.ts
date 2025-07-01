// app/api/images-proxy/route.ts
import { NextRequest, NextResponse } from "next/server";
import { readOnlyBackend } from "@/utils/backend";

export async function GET(req: NextRequest) {
    const imageUrl = req.nextUrl.searchParams.get("path");

    if (!imageUrl) {
        return new NextResponse("Missing image URL", { status: 400 });
    }

    try {
        const response = await readOnlyBackend.get(imageUrl, {
            responseType: "arraybuffer",
            "baseURL": process.env.STRAPI_HOST,
        });

        const contentType = response.headers["content-type"] || "image/jpeg";

        return new NextResponse(response.data, {
            status: 200,
            headers: {
                "Content-Type": contentType,
                "Cache-Control": "public, max-age=86400", // cache for 1 day
            },
        });
    } catch (error: any) {
        console.error("Image Proxy Error:", error.response);
        return new Response("Failed to fetch image", { status: 500 });
    }
}

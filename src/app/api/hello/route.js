import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const data = {
            message: "Hello, world!",
            timestamp: new Date().toLocaleString(),
            status: 200
        };
        return NextResponse.json(data, { status: 200 })
    }

    catch (error) {
        return new Response(JSON.stringify(data), {
            headers: { "Content-Type": "application/json" },
            status: 500,
            message: "Error"
        });
        return NextResponse.json(errorDate, { status: 500 })
    }
}
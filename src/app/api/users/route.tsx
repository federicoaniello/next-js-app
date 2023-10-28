import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";

export function GET(request: NextRequest) {
    return NextResponse.json({ message: "Hello, world!" });
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });
    return NextResponse.json({ id: Math.random(), ...body }, { status: 201 });
}
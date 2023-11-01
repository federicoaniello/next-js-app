import aws from "@/app/s3/aws";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.formData();
    const res = await aws(body.get("file") as File);
    return NextResponse.json(res);
    }
import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";


export function GET (request: NextRequest, {params}: {params:{id: number}}) {
    if(params.id > 10) {
        return NextResponse.json({error: "id must be less than 10"}, {status: 404})
    }
    return NextResponse.json({id: 1, name:"Smusi"})
}

export async function PUT(request: NextRequest, {params}: {params:{id: number}}) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400})
    }

    if(params.id > 10) {
        return NextResponse.json({error: "id must be less than 10"}, {status: 400})
    }

    return NextResponse.json({id: params.id, ...body})
}

export async function DELETE(request: NextRequest, {params}: {params:{id: number}}) {
    if(params.id > 10) {
        return NextResponse.json({error: "id must be less than 10"}, {status: 404})
    }
    return NextResponse.json({id: params.id})
}
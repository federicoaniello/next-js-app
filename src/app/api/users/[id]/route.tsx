import { NextRequest, NextResponse } from "next/server";
import { schema } from "../schema";
import { prisma } from "../../../../../prisma/client/client";

interface Params {
    params:{
        id: string
    }
}

export async function GET (request: NextRequest, {params}: Params) {
    try {
        const result = await prisma.user.findUnique({where: {id: +params.id}});
        if(!result) return NextResponse.json({error: "User not found"}, {status: 404});
        return NextResponse.json(result, {status: 201})
        
    } catch (error) {
        return NextResponse.json(error, {status: 400})
    }
}

export async function PUT(request: NextRequest, {params}: Params) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400})
    }
    try {
        const result = (await prisma.user.update({where: {id: +params.id}, data: body})).id;
        return NextResponse.json({id:result,...body}, {status: 201})

    } catch (error) {
        
    }
}

export async function DELETE(request: NextRequest, {params}: Params) {
    try {
        const result = await prisma.user.delete({where: {id: +params.id}});
        if(!result) return NextResponse.json({error: "User not found"}, {status: 404});
        return NextResponse.json(result, {status: 201})
    } catch (error) {
        return NextResponse.json({error: error}, {status: 400})
    }
    return NextResponse.json({id: params.id})
}
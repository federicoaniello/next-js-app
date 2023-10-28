import { NextRequest, NextResponse } from "next/server";
import { schema } from "./schema";
import { prisma } from "../../../../prisma/client/client";

export async function GET(request: NextRequest) {
    try {
        const users = await prisma.user.findMany({orderBy: {id: "asc"}});
        if(!users) return NextResponse.json({error: "No users found"}, {status: 404});
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({error: error}, {status: 500});
    }
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });
    
    const user = await prisma.user.findUnique({where: {email: body.email}});
    if(user){
        return NextResponse.json({error: "User already exists"}, {status: 400});
    }

    const newUser = await prisma.user.create({data: {
        name: body.name,
        email: body.email,
        followers: body.followers,
        isActive: body.isActive,

    }
    })
    return NextResponse.json(newUser, { status: 201 });
}
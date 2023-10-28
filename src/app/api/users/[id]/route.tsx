import { NextRequest, NextResponse } from "next/server";
import { UserSchema } from "../schema";
import { prisma } from "../../../../../prisma/client/client";

interface Params {
    params: {
        id: string
    }
}

export async function GET(request: NextRequest, { params }: Params) {
    try {
        const result = await prisma.user.findUnique({ where: { id: +params.id } });
        if (!result) return NextResponse.json({ error: "User not found" }, { status: 404 });
        return NextResponse.json(result, { status: 201 })

    } catch (error) {
        return NextResponse.json(error, { status: 400 })
    }
}

export async function PUT(request: NextRequest, { params }: Params) {
    const body = await request.json();
    const validation = UserSchema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }
    try {
        const user = await prisma.user.findUnique({ where: { id: +params.id } });
        if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
        const updatedUser = await prisma.user.update({
            where: { id: +params.id },
            data: {
                name: body.name,
                //email: body.email,
                followers: body.followers
            }
        });
        return NextResponse.json(updatedUser, { status: 201 })

    } catch (error) {
        return NextResponse.json(error, { status: 500 })
    }
}

export async function DELETE(request: NextRequest, { params }: Params) {
    try {
        const userToDelete = await prisma.user.findUnique({ where: { id: +params.id } });
        if (!userToDelete) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        const result = await prisma.user.delete({ where: { id: +params.id } });
        if (!result) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 400 });
    }
}
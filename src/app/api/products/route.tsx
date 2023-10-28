import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/client/client";
import { productSchema } from "./schema";

export async function GET (request: NextRequest) {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
}

export async function POST (request: NextRequest) {
    const body = await request.json();
    const validation = productSchema.safeParse(body);
    if(!validation.success) return NextResponse.json({ error: validation.error.errors }, { status: 400 });

    try {
        const product = await prisma.product.create({
            data:{
                name: body.name,
                price: body.price
            }
        });
        return NextResponse.json(product, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}


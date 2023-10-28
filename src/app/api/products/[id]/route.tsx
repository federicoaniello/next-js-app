import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/client/client";

interface Params {
    params: {
        id: string
    }
}

export async function GET(request: NextRequest, {params}: Params) {
    const product = await prisma.product.findFirst({
        where:{
            id: parseInt(params.id)
        }
    });
    if(!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json(product);
}

export async function PUT(request: NextRequest, {params}: Params) {
    const body = await request.json();
    const product = await prisma.product.findFirst({
        where:{
            id: parseInt(params.id)
        }
    });
    if(!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
    const updatedProduct = await prisma.product.update({
        where:{
            id: parseInt(params.id)
        },
        data:{
            name: body.name,
            price: body.price
        }
    });
    return NextResponse.json(updatedProduct);
}
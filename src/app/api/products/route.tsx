import { IProduct } from "@/interfaces/IProduct";
import { NextRequest, NextResponse } from "next/server";

export let products: IProduct[] = [
    {
        id: 1,
        name: "Milk",
        price: 2.5
    },
    {
        id: 2,
        name: "Bread",
        price: 3.5
    }
]

export function GET (request: NextRequest) {
    return NextResponse.json(products);
}

export async function POST (request: NextRequest) {
    const body = await request.json();
    const product: IProduct = {
        id: Math.random(),
        ...body
    }
    products.push(product);
    return NextResponse.json(product, { status: 201 });
}

export async function PUT (request: NextRequest) {
    const body = await request.json();
    const productToChangeIndex = products.findIndex(product => product.id === body.id);
    if (productToChangeIndex === -1) return NextResponse.json({ error: "Product not found" }, { status: 404 });
    const productToChange = {
        ...products[productToChangeIndex],
        ...body
    }
    products[productToChangeIndex] = productToChange;
    return NextResponse.json(productToChange, { status: 201 });
}
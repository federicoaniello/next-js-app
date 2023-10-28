import { NextRequest, NextResponse } from "next/server";
import { products } from "../route";


export function GET(request: NextRequest, {params}: {params:{id: string}}) {
    const foundProduct = products.find(product => product.id === +params.id);
    if(!foundProduct){
        return NextResponse.json({status: 404, json: {error: "Product not found"}})
    }
    return NextResponse.json(foundProduct);

}
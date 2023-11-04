import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

/**
 * Shows token
 * @param req 
 * @returns 
 */
export async function GET(req: NextRequest){
    const token = await getToken({req});
    return NextResponse.json({token});
}
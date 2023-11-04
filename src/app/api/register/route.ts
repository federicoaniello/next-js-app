import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "../../../../prisma/client/client";
import bcrypt from "bcrypt";
const schema = z.object({
    email: z.string().email(),
    password: z.string()
});

export async function POST (req: NextRequest) {
    const body = await req.json();
        const validation = schema.safeParse(body);
        if(!validation.success){
            return NextResponse.json(validation.error.message, {status:400});
        }
        const user = await prisma.user.findUnique({where:{email:validation.data.email}});
        if(user) return NextResponse.json("User with this email already exists", {status:400});
        const hashedPassword = await bcrypt.hash(validation.data.password, 10);        
        try {
            const newUser = await prisma.user.create({
                data:{
                    email:validation.data.email,
                    hashedPassword
                }
            });
            return NextResponse.json({email:newUser.email, id:newUser.id});
        } catch (error) {
            return NextResponse.json({error}, {status:500});
        }

}
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { Provider } from "next-auth/providers/index";
import { prisma } from "../../../../../prisma/client/client";
import bcrypt from "bcrypt";
export const googleAuth: Provider= GoogleProvider({
    clientId:process.env.GOOGLE_CLIENT_ID!,
    clientSecret:process.env.GOOGLE_SECRET!
})


const handler = NextAuth({
providers:[
    Credentials({
        name:"Credentials",
        credentials:{
            email:{
                label:"Email",
                type:"email",
                placeholder:"Email"
            },
            password:{
                label:"Password",
                type:"password",
                placeholder:"Password"
            }
        },
        async authorize(credentials, req) {
            if(!credentials?.email || !credentials?.password) return null;
            const user = await prisma.user.findUnique({where:{email:credentials.email}});
            if(!user) return null;

            const passwordMatch = bcrypt.compare(credentials.password, user.hashedPassword!);
            if(!passwordMatch) return null;
            return user;

        },
        }),
    googleAuth
],
    adapter:PrismaAdapter(prisma),
    session:{
        strategy:"jwt"
    }
});

export { handler as GET, handler as POST }
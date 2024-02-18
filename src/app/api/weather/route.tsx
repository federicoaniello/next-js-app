import { NextRequest, NextResponse } from "next/server";

interface Params {
    params: {
        city: string
    }
}

export async function POST(request: NextRequest, {params}: Params) {
    try {
        const {city} = await request.json();
        const apiKey = process.env.API_NINJAS_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "API key is missing" }, { status: 500 });
        }
        const url = new URL('https://api.api-ninjas.com/v1/city');
        url.search = new URLSearchParams({'name':city,'country':'IT'}).toString();


        const users = await fetch(url, {
            headers: {
                'X-Api-Key': apiKey
            }
        });

        const data = await users.json();
        console.log(data)
        if (!data) return NextResponse.json({ error: "No city found with this name" }, { status: 404 });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}


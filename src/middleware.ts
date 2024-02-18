export {default} from "next-auth/middleware";
// export function middleware(req: NextRequest){
//     return NextResponse.redirect(new URL('/new-page', req.url))
// }


export const config = {
    // * zero o più parametri
    // + uno o più parametri
    // ? zero o un parametro
    matcher: [
        // '/api/:path*',
        // '/uploadImage/:path*',
        // '/users'
    ]
}
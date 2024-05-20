import  { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(async function middleware(req) {
    // authorized user
    const url = req.nextUrl.pathname;
    const userRole = req?.nextauth?.token?.user?.role

    if(url?.startsWith("/admin") && userRole !== "admin"){
        return NextResponse.redirect(new URL("https://master.d28j0wql6qmeva.amplifyapp.com", req.url))
    }

},
{
    callbacks:{
        authorized: ({ token }) => {
            if(!token){
                return false
            }
        }
    }
});


export const config = {
    matcher: ["/admin/:path*", "/me/:path*", "https://master.d28j0wql6qmeva.amplifyapp.com"]
}




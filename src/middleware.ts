import { NextResponse, type MiddlewareConfig, type NextRequest } from "next/server"

const publicRoutes = [
    {path: '/home', whenAutenticated: 'redirect'},
    {path: '/login', whenAutenticated: 'redirect'},
    {path: '/pricing', whenAutenticated: 'next'},
]

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/login'

export function middleware(request: NextRequest){

    const path = request.nextUrl.pathname
    const publicRoute = publicRoutes.find(route => route.path === path)
    const authToken = request.cookies.get('token')

    if(!authToken && publicRoute){
        return NextResponse.next()
    }

    if(!authToken && !publicRoute){

        const redirectUrl = request.nextUrl.clone()

        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE

        return NextResponse.redirect(redirectUrl)
        
    }
    
    if(authToken && publicRoute && publicRoute?.whenAutenticated == 'redirect'){
        const redirectUrl = request.nextUrl.clone()

        redirectUrl.pathname = '/'

        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && !publicRoute){
        
        return NextResponse.next()
    }

    return NextResponse.next()

}

export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}
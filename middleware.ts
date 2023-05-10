// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url));
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   // matcher: '/about/:path*',
// };


import { INTERNALS } from 'next/dist/server/web/spec-extension/request';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const obj = NextResponse.rewrite(new URL('/about', request.url))
  // NextResponse.json
  // NextResponse.next
  // NextResponse.redirect
  // NextResponse.rewrite
  // console.log(`request[INTERNALS]`);
  // console.log(request);
  
  // obj.redirected = true ;
  // console.log(  NextResponse.rewrite(new URL('/about', request.url)));
  // console.log({url : request.url});

  // console.log({request});
  
  // return {
  //   cookies: ResponseCookies {},
  //   url: '',
  //   body: null,
  //   bodyUsed: false,
  //   headers: { x-middleware-rewrite: 'http://localhost:3000/about' },
  //   ok: true,
  //   redirected: false,
  //   status: 200,
  //   statusText: '',
  //   type: 'default'
  // } 
} 

// export function middleware(request: NextRequest) {
//   return NextResponse.rewrite(new URL('/about', request.url))

//   // if (request.nextUrl.pathname.startsWith('/')) {
//   //   return NextResponse.rewrite(new URL('/about', request.url));
//   // }
 
//   // if (request.nextUrl.pathname.startsWith('/dashboard')) {
//   //   return NextResponse.rewrite(new URL('/dashboard/user', request.url));
//   // }
// }
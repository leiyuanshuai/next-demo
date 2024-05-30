// app/api/route.js
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import {headers} from 'next/headers'
import {redirect} from 'next/navigation'
// 处理cookie
// export async function GET(request) {
//   const cookieStore = cookies()
//   const token = cookieStore.get('token')
//   return new NextResponse('Hello, Next.js!', {
//     status: 200,
//     headers: { 'Set-Cookie': `token=${token.value}` },
//   })
// }

// 处理返回新的header
// export async function GET(req) {
//   const headersList = headers();
//   console.log('user-agent=', headersList.get('user-agent'))
//   console.log('cookie=', headersList.get('cookie'))
//   console.log('accept-encoding=', headersList.get('accept-encoding'))
//   return new NextResponse('hello,我在测试headers', {
//     status: 200,
//     headers: {
//       name: 'leichao'
//     }
//   })
// }

export async function GET(req) {
  redirect('https://nextjs.org/')
}

import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return NextResponse.json({ data })
}
//request: NextRequest 对象 可以在NextRequest ts定义中查看,可以获取cookies nextUrl ua url nextUrl
// context 包含当前动态路由参数的对象 { params }
export async function POST(request, context) {
  // console.log('cookies', request.cookies.get('token')) // { name: 'token', value: '123' }
  // console.log('url', request.url) // http://localhost:3000/api/posts?name=leichao&age=30
  console.log('pathname', request.nextUrl.pathname)
  console.log('searchParams', request.nextUrl.searchParams)
  // console.log('request', request.cookies)
  // console.log('context', context)
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return NextResponse.json({ data })
}

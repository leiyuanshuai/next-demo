// app/api/route.js
import { cookies, headers } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
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

// 重定向
// export async function GET(req) {
//   redirect('https://nextjs.org/')
// }
// https://developer.mozilla.org/zh-CN/docs/Web/API/Request 可以fetch请求的request api
// 解析json格式的post请求
// export async function POST(request) {
//   const body = await request.json()
//   // console.log(body)
//   console.log(request)
//   return NextResponse.json({ ...body, message: '解析post json形式的请求体' })
// }
// 解析json格式的post请求
// export async function POST(request) {
//   const body = await request.json()
//   // console.log(body)
//   console.log(request)
//   return NextResponse.json({ ...body, message: '解析post json形式的请求体' })
// }

// 解析form-data格式的post请求
// export async function POST(request) {
//   const formData = await request.formData()
//   const name = formData.get('name')
//   const email = formData.get('email')
//   // const file = formData.get('file')
//   // console.log('file', file)
//   return NextResponse.json({ name, email, message: '解析post请求的formData' })
// }


// 解析text格式的post请求
// export async function POST(request) {
//   const body = await request.text(); // 解析文本格式的请求体
//   console.log('Request body:', body);
//   return NextResponse.json({ message: 'Request body parsed successfully', body });
// }

//  获取二进制格式的请求体内容 postman类型为二进制的
// export async function POST(request) {
//   const arrayBuffer = await request.arrayBuffer(); // 解析二进制格式的请求体
//   console.log('Request body:', arrayBuffer);

//   return NextResponse.json({ message: 'Request body parsed successfully', length: arrayBuffer.byteLength });
// }

// 类型为x-www-form-urlencoded
// export async function POST(request) {
//   const text = await request.text(); // 获取请求体的原始文本
//   console.log('Request body:', text); // token=1234567&name=leichao&age=32
//   const params = new URLSearchParams(text); // 使用 URLSearchParams 解析

//   const body = {};
//   for (const [key, value] of params.entries()) {
//     body[key] = value;
//   }
//   // console.log('Request body:', body);

//   return NextResponse.json({ message: 'Request body parsed successfully', body });
// }

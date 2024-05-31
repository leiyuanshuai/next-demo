// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  //  clone 请求标头
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-hello-from-middleware1', 'hello')

  // 你也可以在 NextResponse.rewrite 中设置请求标头
  const response = NextResponse.next({
    request: {
      // 设置新请求标头
      headers: requestHeaders,
    },
  })

  // 设置新响应标头 `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello')
  return response


   // 鉴权判断 也就是对应的header中没有用户信息则返回错误信息或者跳转到登录页
  //  if (!isAuthenticated(request)) {
  //   // 返回错误信息
  //   return new NextResponse(
  //     JSON.stringify({ success: false, message: 'authentication failed' }),
  //     { status: 401, headers: { 'content-type': 'application/json' } }
  //   )
  // }
}
// 判断只匹配api后端接口以及hd静态文件开头的才处理
// export const config = {
//   matcher: '/api/:path*',
// }
// 如何优雅的编写更复杂的中间件请参考: https://juejin.cn/book/7307859898316881957/section/7340583389159751731?enter_from=course_center&utm_source=course_center

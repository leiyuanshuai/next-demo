/* eslint-disable @next/next/no-img-element */
// export const revalidate = 1
// export default async function Page() {
//   // 此时是静态渲染
//   const data = await fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
//   const item = data[0]
//   console.log('此时是静态渲染 server Page')
//   // export const revalidate = 1 可以在最上面写这个取消静态渲染
//   return (
//     <>
//     <img src={item.url} width="300" alt="cat" height={item.height}/>
//     <button>button</button>
//     </>
//   )
// }

// export default async function Page({params, searchParams,context}) {
//   // 此时是动态渲染，在调用接口之前，调用cookies,headers中的一个就会转为动态渲染 运行 npm run build 可以看到显示
//   // const cookieStore = cookies()
//   // const headersList = headers();
//   // const token = cookieStore.get('token')
//   // console.log('params', params) // {}
//   console.log('searchParams', searchParams) // { name: 'leichao' }
//   // console.log('context', context)
//   // console.log('headersList', headersList.get('test'))
//   const data = await fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
//   const item = data[0]
//   return (
//     <>
//     <img src={item.url} width="300" alt="cat" height={item.height}/>
//     <div>{JSON.stringify(searchParams)}</div>
//     <div> {new Date().toLocaleTimeString()}</div>
//     <button>button</button>
//     </>
//   )
// }
// fetchCache 可用值 default no-cache reload force-cache only-if-cached

import {headers, cookies} from 'next/headers'
export default async function Page() {

  // 第一种情况会形成动态路由+清除fetch缓存
  // const data = await fetch('https://api.thecatapi.com/v1/images/search', {
  //   cache: 'no-store' // 会形成动态路由
  // }).then(res => res.json())

  // 第二种情况会形成动态路由+清除fetch缓存
  //   const data = await fetch('https://api.thecatapi.com/v1/images/search', {
  //     next: { revalidate: 0 } // 会形成动态路由
  // }).then(res => res.json())

 // 第三种情况会形成动态路由+清除fetch缓存  在headers 或 cookies 或 searchParams 方法之后使用 fetch请求
  // const headersList = headers();
  // const data = await fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
  // const item = data[0]

  // 第四种情况会形成动态路由+fetch缓存还是存在 在页面的顶部添加 export const dynamic = 'force-dynamic'; 配置路由段选项
  const data = await fetch('https://api.thecatapi.com/v1/images/search').then(res => res.json())
  const item = data[0]
  return (
    <>
    <img src={item.url} width="300" alt="cat" height={item.height}/>
    <button>button5</button>
    </>
  )
}

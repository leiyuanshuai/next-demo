/* eslint-disable @next/next/no-img-element */
// export const fetchCache = 'force-no-store';
export const dynamic = 'force-dynamic'
async function getData() {
  // 接口每次调用都会返回一个随机的猫猫图片数据
  // 在多个组件层级中发送同一个请求react会开启记忆缓存
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  return res.json()
  // 下面是取消react请求记忆
  // const { signal } = new AbortController()
  // const res = await fetch('https://api.thecatapi.com/v1/images/search', { signal })
  // return res.json()
}

export async function generateMetadata() {
  const data = await getData()
  console.log('generateMetadata', data[0].id)
  return {
    title: data[0].id
  }
}

export default async function Page() {
  const data = await getData()
  console.log('Page', data[0].id)
  return (
    <>
      <h1>图片 ID：{data[0].id}</h1>
      <img src={data[0].url} width="300" alt="cat"/>
      <CatDetail />
    </>
  )
}

async function CatDetail() {
  const data = await getData()
  console.log('CatDetail', data[0].id)
  return (
    <>
      <h1>图片 ID：{data[0].id}</h1>
      <img src={data[0].url} width="300" alt="cat"/>
    </>
  )
}

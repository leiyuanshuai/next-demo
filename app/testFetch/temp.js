/* eslint-disable @next/next/no-img-element */
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  if (!res.ok) {
    // 由最近的 error.js 处理
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
async function getImg() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  if (!res.ok) {
    // 由最近的 error.js 处理
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Page() {
  const data = await getData()
  const imgData = await getImg()
  const item = data.slice(0,1)[0]
  console.log('imgData', imgData[0]);
  return (
    <div>
      <h2>测试fetch用法</h2>
      <div>{JSON.stringify(item)}</div>
      <img src={imgData[0].url} alt="cat"/>
    </div>
  )
}

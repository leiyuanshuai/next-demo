"use client";
export default function Page({ params }) {
// 访问、shop/a/b/d
  console.log('params', params) // { slug: [ 'a', 'b', 'd' ] }
  return <div>
    <h2>测试[...slug]用法</h2>
    <div>My Post: {params.slug}</div>
    </div>
}

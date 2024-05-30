export default function Page({ params }) {
  return <div>
    <h2>动态路由参数</h2>
    <div>My Post: {params.slug}</div>
    </div>
}

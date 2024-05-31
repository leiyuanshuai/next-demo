// app/blog/[slug]/page.js

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts.slice(0,4).map(post => ({
    slug: `${post.id}`,
  }));
}

export default async function BlogPost({ params }) {
    // const [data, setData] = useState(posts)
  const { slug } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const post = await res.json();

  return (
    <div>
      {/* ISR和SSG一起使用 */}
      <button onClick={async () => {
          const res = await fetch('https://jsonplaceholder.typicode.com/posts')
          const posts = await res.json()
          setData(posts.slice(10, 20))
      }}>换一批</button>
      <h2>标题：{post.title}</h2>
      <h2>id: {post.id}</h2>
      <p>内容{post.body}</p>
    </div>
  );
}

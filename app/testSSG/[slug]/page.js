// app/blog/[slug]/page.js

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts.slice(0,4).map(post => ({
    slug: `${post.id}`,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const post = await res.json();

  return (
    <div>
      <h2>标题：{post.title}</h2>
      <h2>id: {post.id}</h2>
      <p>内容{post.body}</p>
    </div>
  );
}

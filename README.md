#### 4 种方式可以实现路由导航
```
import { usePathname, useSearchParams, useRouter, redirect } from 'next/navigation';
redirect // 用于服务器组件跳转
```
#### App路由如何做静态站点SSG
- 默认如果没有数据接口请求的默认就是静态SSG渲染，内容在构建的时候就已经确定了
```
  一定要配置 output: 'export'
  并且要写generateStaticParams 
  export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts.slice(0,4).map(post => ({
    slug: `${post.id}`,
  }));
}
build完成之后，需要执行npx serve@latest out
```

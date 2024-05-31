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
#### 中间件不要用node.js api

#### SSR步骤
```
1:服务端获取所有数据
2:服务端渲染 HTML
3:将页面的 HTML、CSS、JavaScript 发送到客户端
4:使用 HTML 和 CSS 生成不可交互的用户界面（non-interactive UI）
5:React 对用户界面进行水合（hydrate），使其可交互（interactive UI）
这些步骤是连续的、阻塞的。这意味着服务端只能在获取所有数据后渲染 HTML，React只能在下载了所有组件代码后才能进行水合
```
#### 服务器组件的好处

- 数据获取：通常服务端环境（网络、性能等）更好，离数据源更近，在服务端获取数据会更快。通过减少数据加载时间以及客户端发出的请求数量来提高性能
- 安全：在服务端保留敏感数据和逻辑，不用担心暴露给客户端
- 缓存：服务端渲染的结果可以在后续的请求中复用，提高性能
- bundle 大小：服务端组件的代码不会打包到 bundle 中，减少了 bundle 包的大小
- 初始页面加载和 FCP：服务端渲染生成 HTML，快速展示 UI
- Streaming：服务端组件可以将渲染工作拆分为 chunks，并在准备就绪时将它们流式传输到客户端。用户可以更早看到页面的部分内容，而不必等待整个页面渲染完毕

#### 客户端组件和服务器组件的区别

服务端组件运行在构建时和服务端，客户端组件运行在构建时、服务端（生成初始 HTML）和客户端（管理 DOM）。
服务器组件可以导入客户端组件，但是客户端组件不可以导入服务器组件, 并且服务器组件中不可以使用useState 以及浏览器和node api, 
当你在客户端组件引入组件的时候，会默认把引入的组件当做客户端组件 并且会打包进客户端组件bundle中

```javascript
最佳实践一：当你在服务器组件中想使用 浏览器api 比如useState的时候，可以把它抽离到客户端组件中,然后引入进来
最佳实践二：可以在客户端组件中 将服务端组件以 props 的形式传给客户端组件：(在客户端组件中使用服务器组件的最佳实践)
比如下面的
<ClientComponent>
  <ServerComponent />
</ClientComponent>
```
#### 服务器组件和客户端组件相对于SSR解决了什么问题
之前是SSR所有组件都需要水合, 现在是服务端组件的代码不会打包到客户端bundle中。渲染的时候，只有客户端组件需要进行水合，服务端组件无须水合。

#### 客户端组件报错的各种问题解决办法
> https://juejin.cn/post/7352342892785352755


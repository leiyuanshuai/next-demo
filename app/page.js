import Link from 'next/link';
export default function Home() {
  const arr = [
    {
      text: 'Go to testRouter Page',
      href: '/testRouter?name=John&age=30',
      className: 'item',
    },
    {
      text: 'Go to testSSG Page',
      href: '/testSSG/1',
      className: 'item',
    },
    {
      text: '去testSuspense测试页面',
      href: '/testSuspense',
      className: 'item',
    },
    {
      text: '去testSuspense2测试页面',
      href: '/testSuspense2',
      className: 'item',
    },
    {
      text: '去testLoading测试页面',
      href: '/testLoading',
      className: 'item',
    },
    {
      text: '去测试客户端可能存在的各种错误',
      href: '/testClientError',
      className: 'item',
    },
    {
      text: '去测试客户端获取context的值',
      href: '/testClient',
      className: 'item',
    },
    {
      text: '去测试服务端渲染的三种策略',
      href: '/testServer',
      className: 'item',
    },
    {
      text: '去测试fetch',
      href: '/testFetch',
      className: 'item',
    },
    {
      text: '解决路由缓存方式一',
      href: '/testRouterCache',
      className: 'item',
    },
    {
      text: '解决路由缓存方式二',
      href: '/testRouterCache2',
      className: 'item',
    }
  ];
  return (
    <div>
      <h2>我是首页22</h2>
      <div className="box">
        {arr.map((item) => {
          return (
            <Link href={item.href} key={item.href} className={item.className}>
              {item.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

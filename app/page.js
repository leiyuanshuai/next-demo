import Link from 'next/link';
export default function Home() {
  const res = '122'
  const arr = [
    {
    text: 'Go to testRouter Page',
    href: '/testRouter?name=John&age=30',
    className: 'item'
  },
  {
    text: 'Go to testSSG Page',
    href: '/testSSG/1',
    className: 'item'
  },
  {
    text: '去testSuspense测试页面',
    href: '/testSuspense',
    className: 'item'
  },
  {
    text: '去testSuspense2测试页面',
    href: '/testSuspense2',
    className: 'item'
  },
  {
    text: '去testLoading测试页面',
    href: '/testLoading',
    className: 'item'
  },
]
  return (
    <div>
      <h2>我是首页</h2>
      <div className='box'>
      {arr.map(item => {
        return  <Link href={item.href} key={item.href} className={item.className}>
       {item.text}
      </Link>
      })}
      </div>
    </div>
  );
}

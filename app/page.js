import Link from 'next/link';
export default function Home() {
  const res = '122'
  return (
    <div>
      <h2>我是首页</h2>
      <Link href="/testRouter?name=John&age=30">
        Go to testRouter Page
      </Link>
      <br />
      <Link href="/testSSG/1">
        Go to testSSG Page
      </Link>
    </div>
  );
}

// import Link from 'next/link'

// export const dynamic = 'force-dynamic'

// export default function CacheLayout({
//   children,
// }) {
//   return (
//     // 动态渲染，默认会缓存30秒，切换link才会去加载
//     <section className="p-5">
//         <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
//           <Link href="/testRouterCache/about" prefetch={false}>About</Link>
//           <Link href="/testRouterCache/settings" prefetch={false}>Settings</Link>
//         </nav>
//       {children}
//     </section>
//   )
// }
// 下面是去掉路由缓存的方式
// import Link from 'next/link'
'use client';
export const dynamic = 'force-dynamic';
import { useRouter } from 'next/navigation';
export default function CacheLayout({ children }) {
  const router = useRouter();
  return (
    // 动态渲染，默认会缓存30秒，切换link才会去加载
    <section className="p-5">
      <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
        <button
          onClick={() => {
            router.push('/testRouterCache/about');
            router.refresh()
          }}
        >
          about
        </button>
        <button
          onClick={() => {
            router.push('/testRouterCache/settings');
            router.refresh()
          }}
        >
        settings
        </button>
      </nav>
      {children}
    </section>
  );
}

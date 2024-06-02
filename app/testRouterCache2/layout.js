import Link from 'next/link'
import { Suspense } from 'react'
import { NavigationEvents } from './navigation-events'
// export const dynamic = 'force-dynamic'

export default function CacheLayout({
  children,
}) {
  console.log('CacheLayout2')
  return (
    // 动态渲染，默认会缓存30秒，切换link才会去加载
    <section className="p-5">
        <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
          <Link href="/testRouterCache2/about">About</Link>
          <Link href="/testRouterCache2/settings">Settings</Link>
        </nav>
      {children}
      <Suspense fallback={null}>
        <NavigationEvents />
      </Suspense>
    </section>
  )
}

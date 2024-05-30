"use client";
import { usePathname, useSearchParams, useParams, useRouter } from 'next/navigation'
import Link from 'next/link';
export default function Page() {
  const pathname = usePathname()
  const router = useRouter()
  console.log('query:', router.query)
    return <div>
      <h2>路径:{pathname}</h2>
      <h2>query:{JSON.stringify(router.query, null, 2)}</h2>
      <Link href="/dashboard/about">跳转/dashboard/about</Link>
    </div>
  }

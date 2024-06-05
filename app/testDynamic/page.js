'use client'
// app/page.js
import { useState } from 'react'
import dynamic from 'next/dynamic'

// Client Components:
const ComponentA = dynamic(() => import('./components/a.js'))
const ComponentB = dynamic(() => import('./components/b.js'))
const ComponentC = dynamic(() => import('./components/c.js'), { ssr: false })

export default function ClientComponentExample() {
  const [showMore, setShowMore] = useState(false)

  return (
    <div>
      {/* 立刻加载，但会使用一个独立的客户端 bundle */}
      <ComponentA />

      {/* 按需加载 */}
      {showMore && <ComponentB />}
      <button onClick={() => setShowMore(!showMore)}>Toggle</button>

      {/* 只在客户端加载 */}
      <ComponentC />
    </div>
  )
}

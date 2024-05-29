'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Layout({ children }) {
  const [count, setCount] = useState(0)
  console.log('Layout')
  return (
    <div style={{border: '3px solid red'}}>
      <div>
        <Link href="/dashboard/about">About</Link>
        <br/>
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <h1>Layout的 {count}</h1>
      <button onClick={() => setCount(count + 1)}>
      Layout的Increment增加
      </button>
      {children}
    </div>
  )
}

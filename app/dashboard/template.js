'use client'

import { useState } from 'react'

export default function Template({ children }) {
  const [count, setCount] = useState(0)
  console.log('Template')
  return (
    <div style={{border: '4px solid blue'}}>
      <h1>Template {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        我是Template的Increment
      </button>
      {children}
    </div>
  )
}

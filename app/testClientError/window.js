"use client"
import { useEffect, useState } from "react"
export default function Page() {
  // 会报错, 因为客户端和服务器端表现不一致
  const [innerWidth, setInnerWidth] = useState(0)
  useEffect(() => {
    // 这段代码在服务器预渲染不会执行
    setInnerWidth(window.innerWidth)
  }, [])
  return (
    <div className="p-5">
      innerWidth: {innerWidth}
    </div>
  )
}

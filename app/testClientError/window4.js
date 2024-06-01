'use client'

import { useMounted } from '../hooks/useMounted'

export default function Page() {
  const mounted = useMounted()
  if (!mounted) return null

  return (
    <div className="p-5">
      innerWidth22: {window.innerWidth}
    </div>
  )
}

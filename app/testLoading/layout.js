import Link from 'next/link'

export default function TestLoadingLayout({
  children,
}) {
  return (
    <section>
        <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
          <Link href="/testLoading/about">About</Link>
          <Link href="/testLoading/settings">Settings</Link>
          <Link href="/testLoading/team">Team</Link>
        </nav>
      {children}
    </section>
  )
}

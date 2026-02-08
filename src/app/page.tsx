import Link from "next/link"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-5xl font-bold tracking-tight">Hi, I&apos;m Birk</h1>

      <p className="mt-4 max-w-2xl text-white/70">Software engineering student at the University of Agder.</p>

      <div className="mt-8 flex items-center gap-3">
        <Link href="/projects" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition">
          View projects
        </Link>
      </div>
    </main>
  )
}

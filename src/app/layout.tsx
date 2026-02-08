import "./globals.css"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Birk | Portfolio",
  description: "Portfolio website for Birk",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-wide">
              Birk
            </Link>

            <nav className="flex items-center gap-6 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <Link href="/projects" className="hover:text-white transition">
                Projects
              </Link>
              <Link href="mailto:youremail@example.com" className="hover:text-white transition">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-24 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">© {new Date().getFullYear()} Birk · Built with Next.js & Tailwind</div>
        </footer>
      </body>
    </html>
  )
}

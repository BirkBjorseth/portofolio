import "./globals.css"
import Link from "next/link"
import type { Metadata } from "next"
import { LogoLink } from "@/components/LogoLink"
import { HomeLink } from "@/components/HomeLink"
import { ContactLink } from "@/components/ContactLink"

export const metadata: Metadata = {
  title: "Birk | Portfolio",
  description: "Portfolio – Birk Bjørseth",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className="relative min-h-screen overflow-x-hidden text-white antialiased">
        {/* Global background */}
        <div
          className="
            pointer-events-none fixed inset-0 -z-10
            bg-black
            bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(255,255,255,0.06),transparent_60%),
                radial-gradient(1000px_circle_at_80%_20%,rgba(255,255,255,0.04),transparent_55%)]
          "
        />

        {/* navbar */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <LogoLink />
            <nav className="flex items-center gap-6 text-sm text-white/75">
              <HomeLink className="transition hover:text-white" />

              <Link href="/projects" className="transition hover:text-white">
                Prosjekter
              </Link>

              <ContactLink className="transition hover:text-white" />
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-24 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-white/50">© {new Date().getFullYear()} Birk · Bygget med Next.js og Tailwind CSS</div>
        </footer>
      </body>
    </html>
  )
}

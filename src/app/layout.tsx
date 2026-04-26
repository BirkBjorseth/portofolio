import "./globals.css"
import Link from "next/link"
import type { Metadata } from "next"
import { LogoLink } from "@/components/LogoLink"
import { HomeLink } from "@/components/HomeLink"
import { ContactLink } from "@/components/ContactLink"
import { ThemeToggle } from "@/components/ThemeToggle"

export const metadata: Metadata = {
  title: "Birk | Portfolio",
  description: "Portfolio – Birk Bjørseth",
}

// Runs before hydration to avoid theme flash. Defaults to dark unless user has
// previously chosen "light".
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'){document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative min-h-screen overflow-x-hidden bg-page text-fg antialiased">
        {/* Global background glow */}
        <div className="page-glow pointer-events-none fixed inset-0 -z-10" />

        {/* navbar */}
        <header className="sticky top-0 z-50 border-b border-fg/10 bg-page/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <LogoLink />
            <nav className="flex items-center gap-6 text-sm text-fg/75">
              <HomeLink className="transition hover:text-fg" />

              <Link href="/projects" className="transition hover:text-fg">
                Prosjekter
              </Link>

              <ContactLink className="transition hover:text-fg" />

              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-24 border-t border-fg/10">
          <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-fg/75">© {new Date().getFullYear()} Birk · Bygget med Next.js og Tailwind CSS</div>
        </footer>
      </body>
    </html>
  )
}

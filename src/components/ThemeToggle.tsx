"use client"

import { useSyncExternalStore } from "react"
import { Sun, Moon } from "lucide-react"

type Theme = "dark" | "light"

function subscribe(callback: () => void): () => void {
  window.addEventListener("themechange", callback)
  return () => window.removeEventListener("themechange", callback)
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

function getServerSnapshot(): Theme {
  // FOUC-script i layout.tsx defaulter til "dark" når det ikke finnes lagret valg.
  return "dark"
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark"
    document.documentElement.classList.toggle("dark", next === "dark")
    try {
      localStorage.setItem("theme", next)
    } catch {}
    window.dispatchEvent(new Event("themechange"))
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Bytt til lys modus" : "Bytt til mørk modus"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-fg/75 transition hover:bg-fg/[0.06] hover:text-fg"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}

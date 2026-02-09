"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function ContactLink({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <Link
      href="/#kontakt"
      scroll
      className={className}
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault()
          const el = document.getElementById("kontakt")
          el?.scrollIntoView({ behavior: "smooth" })
        }
      }}
    >
      Kontakt
    </Link>
  )
}

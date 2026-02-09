"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function HomeLink({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <Link
      href="/"
      scroll
      className={className}
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }}
    >
      Hjem
    </Link>
  )
}

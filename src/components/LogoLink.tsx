"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function LogoLink() {
  const pathname = usePathname()

  return (
    <Link
      href="/"
      scroll
      className="text-sm font-semibold tracking-wide text-white"
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      }}
    >
      Birk
    </Link>
  )
}

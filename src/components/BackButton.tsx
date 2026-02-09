"use client"

import Link from "next/link"

type BackButtonProps = {
  href: string
  label?: string
  className?: string
}

export function BackButton({ href, label = "← Tilbake", className = "text-sm text-white/70 hover:text-white transition" }: BackButtonProps) {
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

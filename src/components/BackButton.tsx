"use client"

import Link from "next/link"

type BackButtonProps = {
  href: string
  label?: string
  className?: string
}

export function BackButton({
  href,
  label = "Tilbake",
  className = "inline-flex items-center rounded-xl border border-fg/20 bg-fg/[0.03] px-4 py-2 text-sm font-medium text-fg/90 transition hover:border-fg/35 hover:bg-fg/[0.08] hover:text-fg",
}: BackButtonProps) {
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  )
}

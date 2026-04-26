"use client"

import { useState } from "react"

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(email)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1200)
      }}
      className="rounded-xl border border-fg/15 px-4 py-2 text-sm text-fg/90 hover:bg-fg/[0.06] hover:text-fg transition"
    >
      {copied ? "Kopiert!" : "Kopier e-post"}
    </button>
  )
}

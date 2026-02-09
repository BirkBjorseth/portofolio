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
      className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5 transition"
    >
      {copied ? "Kopiert!" : "Kopier e-post"}
    </button>
  )
}

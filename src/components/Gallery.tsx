"use client"

import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"

export function Gallery({ images, title = "Gallery" }: { images: string[]; title?: string }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images])
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const length = safeImages.length

  const prev = useCallback(() => {
    if (length <= 0) return
    setIndex((i) => (i - 1 + length) % length)
  }, [length])

  const next = useCallback(() => {
    if (length <= 0) return
    setIndex((i) => (i + 1) % length)
  }, [length])

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen, close, prev, next])

  if (length === 0) return null

  const clampedIndex = ((index % length) + length) % length
  const current = safeImages[clampedIndex]

  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold">{title}</h2>

      {/* Main image */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <button type="button" onClick={open} className="relative block aspect-[16/9] w-full" aria-label="Open fullscreen image">
          <Image src={current} alt={`${title} ${clampedIndex + 1}`} fill className="object-cover" priority />

          <div className="absolute bottom-3 right-3 rounded-lg border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white/80 backdrop-blur">Click to enlarge</div>
        </button>

        {/* Controls */}
        {length > 1 && (
          <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
            <button onClick={prev} className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition">
              ← Prev
            </button>

            <div className="text-sm text-white/60">
              {clampedIndex + 1} / {length}
            </div>

            <button onClick={next} className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition">
              Next →
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {safeImages.map((src, i) => (
            <button
              key={src}
              onClick={() => setIndex(i)}
              className={["relative aspect-[16/9] overflow-hidden rounded-xl border bg-black/20 transition", i === clampedIndex ? "border-white/40" : "border-white/10 hover:border-white/25"].join(
                " ",
              )}
              aria-label={`Open image ${i + 1}`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm" role="dialog" aria-modal="true" onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
            <div className="relative w-full max-w-[95vw]">
              <button onClick={close} className="absolute -top-12 right-0 rounded-lg border border-white/15 bg-black/40 px-3 py-1.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition">
                Esc to close ✕
              </button>

              {length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white transition"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white transition"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </>
              )}

              <div className="relative mx-auto h-[85vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
                <Image src={current} alt={`${title} fullscreen`} fill className="object-contain" priority />
              </div>

              <div className="mt-3 text-center text-sm text-white/70">
                {clampedIndex + 1} / {length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

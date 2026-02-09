"use client"

import Image from "next/image"
import { useCallback, useEffect, useMemo, useState } from "react"
import { IphoneMockup } from "./IphoneMockup"

export function Gallery({ images, kind }: { images: string[]; kind?: "web" | "mobile" }) {
  const safeImages = useMemo(() => images.filter(Boolean), [images])

  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const length = safeImages.length
  const isMobile = kind === "mobile"

  const prev = useCallback(() => {
    if (length <= 0) return
    setIndex((i) => (i - 1 + length) % length)
  }, [length])

  const next = useCallback(() => {
    if (length <= 0) return
    setIndex((i) => (i + 1) % length)
  }, [length])

  const open = useCallback(() => {
    if (length <= 0) return
    setIsOpen(true)
  }, [length])

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (length <= 0) return

    function onKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName?.toLowerCase()
      if (tag === "input" || tag === "textarea" || tag === "select") return

      if (isOpen) {
        if (e.key === "Escape") close()
        if (e.key === "ArrowLeft") prev()
        if (e.key === "ArrowRight") next()
        return
      }

      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [length, isOpen, close, prev, next])

  if (length === 0) return null

  const clampedIndex = ((index % length) + length) % length
  const current = safeImages[clampedIndex]

  return (
    <section>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
        <button type="button" onClick={open} className="relative block w-full overflow-hidden" aria-label="Open fullscreen image">
          {isMobile ? (
            <div className="flex justify-center py-10">
              <div className="w-[280px] sm:w-[320px]">
                <IphoneMockup src={current} alt={`Screenshot ${clampedIndex + 1}`} />
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/9] w-full overflow-hidden scale-[1.02]">
              <Image src={current} alt={`Screenshot ${clampedIndex + 1}`} fill className="object-cover" priority />
            </div>
          )}

          <div className="absolute bottom-3 right-3 rounded-lg border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white/80 backdrop-blur">Fullskjerm</div>
        </button>

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

      {length > 1 && (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {safeImages.map((src, i) => (
            <button
              key={`${src}-${i}`}
              onClick={() => setIndex(i)}
              className={[
                "relative overflow-hidden rounded-xl border bg-black/20 transition",
                i === clampedIndex ? "border-white/40" : "border-white/10 hover:border-white/25",
                isMobile ? "aspect-[9/16]" : "aspect-[16/9]",
              ].join(" ")}
              aria-label={`Open image ${i + 1}`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm" role="dialog" aria-modal="true" onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-6">
            <div className="relative w-full max-w-[95vw]">
              <button onClick={close} className="absolute -top-12 right-0 rounded-lg border border-white/15 bg-black/40 px-3 py-1.5 text-sm text-white/80 hover:bg-white/5 hover:text-white transition">
                Esc ✕
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
                <Image src={current} alt="Screenshot fullscreen" fill className="object-contain" priority />
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

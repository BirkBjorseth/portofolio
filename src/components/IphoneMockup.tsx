import Image from "next/image"

type IphoneMockupProps = {
  src: string
  alt: string
  sizes?: string
  quality?: number
  priority?: boolean
}

export function IphoneMockup({ src, alt, sizes = "(max-width: 640px) 240px, 260px", quality = 90, priority = false }: IphoneMockupProps) {
  return (
    <div className="relative mx-auto w-full">
      {/* Outer frame */}
      <div
        className="
          relative
          rounded-[2.3rem]
          p-[6px]
          bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-900
        "
      >
        {/* outer highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-[2.3rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]" />

        {/* Inner frame */}
        <div
          className="
            relative
            rounded-[2rem]
            p-[6px]
            bg-black
          "
        >
          {/* inner highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)]" />

          {/* Screen */}
          <div className="relative overflow-hidden rounded-[1.7rem] bg-black">
            <div className="relative aspect-[9/19.5]">
              <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} quality={quality} priority={priority} />
            </div>

            {/* Dynamic island */}
            <div
              className="
                pointer-events-none
                absolute left-1/2 top-[8px]
                h-[18px] w-[84px]
                -translate-x-1/2
                rounded-full
                bg-black
                shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]
              "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

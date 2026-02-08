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
      <div
        className="
          relative
          rounded-[2.3rem]
          p-[6px]
          bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900
          shadow-[0_25px_60px_rgba(0,0,0,0.55)]
          ring-1 ring-white/10
        "
      >
        <div
          className="
            relative
            rounded-[2rem]
            p-[6px]
            bg-black
            ring-1 ring-white/10
          "
        >
          <div className="relative overflow-hidden rounded-[1.7rem] bg-black">
            <div className="relative aspect-[9/19.5]">
              <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} quality={quality} priority={priority} />
            </div>

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[8px]
                h-[18px]
                w-[84px]
                -translate-x-1/2
                rounded-full
                bg-black
                ring-1 ring-white/10
              "
            />
          </div>
        </div>
      </div>
    </div>
  )
}

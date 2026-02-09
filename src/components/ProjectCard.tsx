import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/data/projects"
import { IphoneMockup } from "@/components/IphoneMockup"

export function ProjectCard({ project }: { project: Project }) {
  const isMobile = project.kind === "mobile"

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="
        group relative block h-full overflow-hidden rounded-3xl
        bg-white/[0.035] backdrop-blur-xl
        transition
        hover:-translate-y-1 hover:bg-white/[0.05]
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
      "
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.07] to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="relative p-6">
        <h3 className="text-lg font-semibold tracking-tight text-white/95">{project.title}</h3>
        <div className="mt-3 h-px w-full bg-gradient-to-r from-white/14 via-white/6 to-transparent" />

        {/* Cover */}
        <div className="mt-4">
          {project.coverImage ? (
            isMobile ? (
              <div className="flex justify-center py-2">
                <div className="w-[280px] sm:w-[300px] transition group-hover:scale-[1.01]">
                  <IphoneMockup src={project.coverImage} alt={`${project.title} mobile cover`} sizes="(max-width: 640px) 280px, 300px" quality={90} priority />
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-2xl bg-white/[0.03]">
                <div className="relative aspect-[16/9] w-full">
                  <Image src={project.coverImage} alt={`${project.title} cover`} fill className="object-cover transition duration-300 group-hover:scale-[1.02]" />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            )
          ) : (
            <div className="flex aspect-[16/9] items-center justify-center rounded-2xl bg-white/[0.03] text-sm text-white/55">No image yet</div>
          )}
        </div>

        {/* Tags: 4 under image */}
        {!isMobile && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((t) => (
              <span key={t} className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-white/75">
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="mt-4 rounded-2xl bg-white/[0.03] p-4">
          <p className="text-sm leading-relaxed text-white/70 line-clamp-7">{project.cardDescription ?? project.description}</p>

          {/* tags på mobil prosjekter */}
          {isMobile && <p className="mt-3 text-xs text-white/55">{project.tags.slice(0, 4).join(" · ")}</p>}
        </div>
      </div>
    </Link>
  )
}

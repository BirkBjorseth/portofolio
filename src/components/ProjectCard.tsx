import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/data/projects"
import { IphoneMockup } from "@/components/IphoneMockup"

export function ProjectCard({ project, fromHome = false }: { project: Project; fromHome?: boolean }) {
  const isMobile = project.kind === "mobile"
  const href = fromHome ? `/projects/${project.slug}?from=home` : `/projects/${project.slug}`

  return (
    <Link
      href={href}
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

        {!isMobile && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((t) => (
              <span key={t} className="rounded-full bg-white/[0.05] px-3 py-1 text-xs text-white/75">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 rounded-2xl bg-white/[0.03] p-4">
          <p className="text-sm leading-relaxed text-white/70 whitespace-pre-line line-clamp-20">{(project.cardDescription ?? project.description).trim()}</p>
          {isMobile && <p className="mt-3 text-xs text-white/55">{project.tags.slice(0, 4).join(" · ")}</p>}
        </div>
      </div>
    </Link>
  )
}

"use client"

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
        border border-fg/10
        bg-surface backdrop-blur-xl
        transition
        hover:-translate-y-1 hover:border-fg/20
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)]
      "
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-fg/[0.06] to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="relative p-6">
        <h3 className="text-lg font-semibold tracking-tight text-fg">{project.title}</h3>

        {project.links?.live && (
          <button
            type="button"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation()
              window.open(project.links!.live, "_blank", "noopener,noreferrer")
            }}
            className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-fg transition hover:bg-accent-hover"
          >
            Live
          </button>
        )}

        <div className="mt-3 h-px w-full bg-gradient-to-r from-fg/20 via-fg/[0.08] to-transparent" />

        <div className="mt-4">
          {project.coverImage ? (
            isMobile ? (
              <div className="flex justify-center py-2">
                <div className="w-[280px] sm:w-[300px] transition group-hover:scale-[1.01]">
                  <IphoneMockup src={project.coverImage} alt={`${project.title} mobile cover`} sizes="(max-width: 640px) 280px, 300px" quality={90} priority />
                </div>
              </div>
            ) : (
              <div className="relative overflow-hidden rounded-2xl bg-fg/[0.04] ring-1 ring-fg/15 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)]">
                <div className="relative aspect-[16/9] w-full">
                  <Image src={project.coverImage} alt={`${project.title} cover`} fill className="object-cover transition duration-300 group-hover:scale-[1.02]" />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            )
          ) : (
            <div className="flex aspect-[16/9] items-center justify-center rounded-2xl bg-elevated text-sm text-fg/75">No image yet</div>
          )}
        </div>

        {!isMobile && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((t) => (
              <span key={t} className="rounded-full border border-fg/10 bg-elevated px-3 py-1 text-xs text-fg/85">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 rounded-2xl border border-fg/10 bg-elevated p-4">
          <p className="text-sm leading-relaxed text-fg/85 whitespace-pre-line line-clamp-20">{(project.cardDescription ?? project.description).trim()}</p>
          {isMobile && <p className="mt-3 text-xs text-fg/80">{project.tags.slice(0, 4).join(" · ")}</p>}
        </div>
      </div>
    </Link>
  )
}

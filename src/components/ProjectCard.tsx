import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/data/projects"
import { IphoneMockup } from "@/components/IphoneMockup"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
      {/* Title */}
      <div className="px-5 pt-5">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
      </div>

      {/* Cover */}
      <div className="relative w-full bg-black/20">
        {project.coverImage ? (
          project.kind === "mobile" ? (
            <div className="flex justify-center py-6">
              <div className="w-[260px] sm:w-[280px]">
                <IphoneMockup src={project.coverImage} alt={`${project.title} mobile cover`} sizes="(max-width: 640px) 260px, 280px" quality={90} priority />
              </div>
            </div>
          ) : (
            <div className="p-5 pt-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[16/9] w-full bg-black">
                  <Image src={project.coverImage} alt={`${project.title} cover`} fill className="object-cover group-hover:scale-[1.01] transition" />
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center text-white/50 text-sm">No image yet</div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 pt-0">
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 5).map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
              {t}
            </span>
          ))}
        </div>

        <p className="mt-3 text-sm text-white/70 line-clamp-7">{project.cardDescription ?? project.description}</p>
      </div>
    </Link>
  )
}

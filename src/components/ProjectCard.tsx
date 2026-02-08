import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/20">
        {project.coverImage ? (
          <Image src={project.coverImage} alt={`${project.title} cover`} fill className="object-cover group-hover:scale-[1.02] transition" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 text-sm">No image yet</div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{project.title}</h3>

          {project.links?.live ? <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-xs text-white/80">Live</span> : null}
        </div>

        <p className="mt-2 text-sm text-white/70 line-clamp-3">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 5).map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

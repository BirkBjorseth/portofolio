import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "@/data/projects"
import { Gallery } from "@/components/Gallery"

export default async function ProjectDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* Back link */}
      <Link href="/projects" className="text-sm text-white/70 hover:text-white transition">
        ← Back to projects
      </Link>

      {/* Header */}
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{project.title}</h1>

      <p className="mt-4 max-w-2xl text-white/80">{project.description}</p>

      {/* Links */}
      <div className="mt-6 flex flex-wrap gap-3">
        {project.links?.repo ? (
          <a href={project.links.repo} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5 transition">
            View repo
          </a>
        ) : null}

        {project.links?.live ? (
          <a href={project.links.live} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition">
            Live demo
          </a>
        ) : null}
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
            {tag}
          </span>
        ))}
      </div>

      {project.gallery?.length ? <Gallery images={project.gallery} /> : null}
    </main>
  )
}

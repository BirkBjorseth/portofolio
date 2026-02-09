import { notFound } from "next/navigation"
import { projects } from "@/data/projects"
import { Gallery } from "@/components/Gallery"
import { BackButton } from "@/components/BackButton"

export default async function ProjectDetailsPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams?: Promise<{ from?: string }> }) {
  const { slug } = await params
  const sp = (await searchParams) ?? {}

  const project = projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  const backHref = sp.from === "home" ? "/#prosjekter" : "/projects"
  const backLabel = sp.from === "home" ? "← Tilbake til forsiden" : "← Tilbake til prosjekter"

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <BackButton href={backHref} label={backLabel} />

      <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{project.title}</h1>

      <p className="mt-4 max-w-2xl text-white/80">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links?.repo ? (
          <a href={project.links.repo} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5 transition">
            Se repo
          </a>
        ) : null}

        {project.links?.live ? (
          <a href={project.links.live} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition">
            Live demo
          </a>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
            {tag}
          </span>
        ))}
      </div>

      {project.gallery?.length ? <Gallery images={project.gallery} kind={project.kind} /> : null}
    </main>
  )
}

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
  const backLabel = sp.from === "home" ? "Tilbake til forsiden" : "Tilbake til prosjekter"

  const isMobileProject = project.kind === "mobile"

  return (
    <main className="relative mx-auto max-w-6xl px-6 py-16">
      {/* Decorative dotted background, faded out at edges */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10 bg-dot-grid
          [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent_85%)]
        "
      />

      <BackButton href={backHref} label={backLabel} />

      {/* Layout */}
      <div
        className={`
          mt-10 grid gap-12
          lg:grid-cols-2
          ${isMobileProject ? "" : "lg:items-start"}
        `}
      >
        {/* LEFT: Info */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{project.title}</h1>

          <p className="mt-5 max-w-xl text-fg/80 leading-relaxed whitespace-pre-line">{project.description}</p>

          {/* Actions */}
          <div className="mt-7 flex flex-wrap gap-3">
            {project.links?.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl border border-fg/20 bg-fg/[0.03] px-4 py-2 text-sm font-medium text-fg/90 hover:border-fg/35 hover:bg-fg/[0.08] hover:text-fg transition"
              >
                Se repo
              </a>
            )}

            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-fg hover:bg-accent-hover transition"
              >
                Live
              </a>
            )}
          </div>

          {/* Tags */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[...project.tags, ...(project.extraTags ?? [])].map((tag) => (
              <span key={tag} className="rounded-full border border-fg/15 bg-elevated px-3 py-1 text-xs text-fg/85">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: Gallery */}
        {project.gallery?.length && (
          <div
            className={`
              ${isMobileProject ? "" : "lg:-mr-12"}
              rounded-3xl border border-fg/15 bg-surface p-6
              shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]
            `}
          >
            <Gallery images={project.gallery} kind={project.kind} />
          </div>
        )}
      </div>
    </main>
  )
}

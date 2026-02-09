import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { BackButton } from "@/components/BackButton"

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <BackButton href="/" label="← Tilbake til forsiden" />

      <h1 className="mt-4 text-4xl font-bold">Prosjekter</h1>
      <p className="mt-3 text-white/70">Utvalgte prosjekter.</p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}

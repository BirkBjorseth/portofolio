import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-3 text-white/70">A selection of things I’ve built.</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}

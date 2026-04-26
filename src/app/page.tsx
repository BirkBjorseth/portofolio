import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { CopyEmailButton } from "@/components/CopyEmailButton"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      <section className="pt-20 pb-24">
        <h1 className="text-5xl font-bold tracking-tight">Hei, jeg heter Birk</h1>

        <p className="mt-4 max-w-2xl text-fg/70">Dataingeniør med interesse for programvareutvikling og systemer.</p>

        <div className="mt-8 flex items-center gap-4">
          <Link
            href="/projects"
            className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition hover:bg-accent-hover"
          >
            Se prosjekter
          </Link>

          {/* Sosiale medier */}

          <a
            href="https://github.com/BirkBjorseth"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fg/10 bg-surface text-fg/70 transition hover:border-fg/25 hover:text-fg"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/birkbjorseth/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fg/10 bg-surface text-fg/70 transition hover:border-fg/25 hover:text-fg"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* prosjekter */}
      <section id="prosjekter" className="scroll-mt-24 pb-24">
        <h2 className="text-3xl font-semibold">Utvalgte prosjekter</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} fromHome />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-xl border border-fg/20 bg-fg/[0.03] px-5 py-2.5 text-sm font-medium text-fg/90 transition hover:border-fg/35 hover:bg-fg/[0.08] hover:text-fg"
          >
            Se alle prosjekter
          </Link>
        </div>
      </section>

      {/* kontakt */}
      <section id="kontakt" className="scroll-mt-24 pb-32">
        <h2 className="text-3xl font-semibold">Kontakt</h2>
        <p className="mt-2 text-fg/70">Ta kontakt med meg!</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <CopyEmailButton email="birkbjorseth@gmail.com" />
          <span className="text-sm text-fg/80">birkbjorseth@gmail.com</span>
        </div>
      </section>
    </main>
  )
}

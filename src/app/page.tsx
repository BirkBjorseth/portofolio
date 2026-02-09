import Link from "next/link"
import { Github } from "lucide-react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { CopyEmailButton } from "@/components/CopyEmailButton"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      <section className="pt-20 pb-24">
        <h1 className="text-5xl font-bold tracking-tight">Hei, jeg heter Birk</h1>

        <p className="mt-4 max-w-2xl text-white/70">Dataingeniør med fokus på programvareutvikling og moderne webteknologi.</p>

        <div className="mt-8 flex items-center gap-4">
          <Link href="/projects" className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90">
            Se prosjekter
          </Link>

          {/* GitHub link */}
          <a
            href="https://github.com/BirkBjorseth"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] text-white/75 transition hover:bg-white/[0.07] hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* prosjekter */}
      <section className="pb-24">
        <h2 className="text-3xl font-semibold">Utvalgte prosjekter</h2>
        <p className="mt-2 text-white/60">Noe av det jeg har bygget.</p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} fromHome />
          ))}
        </div>

        <div className="mt-10">
          <Link href="/projects" className="text-sm font-medium text-white/80 transition hover:text-white">
            Se alle prosjekter →
          </Link>
        </div>
      </section>

      {/* kontakt */}
      <section id="kontakt" className="scroll-mt-24 pb-32">
        <h2 className="text-3xl font-semibold">Kontakt</h2>
        <p className="mt-2 text-white/70">Ta gjerne kontakt dersom du vil samarbeide eller har spørsmål.</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <CopyEmailButton email="birkbjorseth@gmail.com" />
          <span className="text-sm text-white/60">birkbjorseth@gmail.com</span>
        </div>
      </section>
    </main>
  )
}

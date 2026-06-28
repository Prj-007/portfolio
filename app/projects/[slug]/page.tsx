import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar, CheckCircle2, Zap } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'
import { PROJECTS } from '@/constants/data'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Prajjwal Pratap Singh`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-zinc-950 pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Back */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.category.map((cat) => (
                <span key={cat} className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-500">
                  {cat}
                </span>
              ))}
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                <Calendar size={10} />
                {project.period}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              {project.title}
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400">{project.tagline}</p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.liveAdmin && (
              <a
                href={project.liveAdmin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-colors"
              >
                <ExternalLink size={14} />
                Admin Panel
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-colors"
              >
                <GitHubIcon size={14} />
                GitHub
              </a>
            )}
            {project.githubFE && (
              <a
                href={project.githubFE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-colors"
              >
                <GitHubIcon size={14} />
                Frontend Repo
              </a>
            )}
            {project.githubBE && (
              <a
                href={project.githubBE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium transition-colors"
              >
                <GitHubIcon size={14} />
                Backend Repo
              </a>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            {/* Overview */}
            <section>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Overview</h2>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{project.description}</p>
            </section>

            {/* Problem */}
            <section className="p-5 rounded-2xl border border-amber-200/50 dark:border-amber-500/20 bg-amber-50/50 dark:bg-amber-500/5">
              <h2 className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-2">
                <Zap size={14} />
                Problem Solved
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{project.problem}</p>
            </section>

            {/* Metrics */}
            {project.metrics.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Impact & Results</h2>
                <div className="grid sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="p-4 rounded-xl border border-green-200/50 dark:border-green-500/20 bg-green-50/50 dark:bg-green-500/5 text-center">
                      <p className="text-sm text-green-700 dark:text-green-400 font-medium">{metric}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Features */}
            <section>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Key Features</h2>
              <ul className="flex flex-col gap-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    <CheckCircle2 size={15} className="text-blue-500 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Bottom navigation */}
          <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-blue-500 transition-colors"
            >
              <ArrowLeft size={14} />
              All Projects
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-blue-500 hover:text-blue-600 font-medium transition-colors"
            >
              Hire me →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

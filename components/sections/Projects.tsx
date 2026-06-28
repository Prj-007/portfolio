'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowUpRight, Star } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'
import Link from 'next/link'
import { SectionWrapper, SectionHeading } from '@/components/shared/SectionWrapper'
import { PROJECTS } from '@/constants/data'
import { cn } from '@/lib/utils'
import type { Project } from '@/types'

const FILTERS = ['All', 'Full Stack', 'Backend', 'AI', 'SaaS']

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
    >
      {/* Image placeholder */}
      <div className="relative h-52 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-bold text-zinc-300 dark:text-zinc-600 mb-2">
              {project.title.slice(0, 2).toUpperCase()}
            </div>
            <p className="text-xs text-zinc-400">{project.period}</p>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured badge */}
        <div className="absolute top-3 left-3">
          <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-amber-500/90 text-white backdrop-blur-sm">
            <Star size={10} fill="white" />
            Featured
          </span>
        </div>

        {/* Category badges */}
        <div className="absolute top-3 right-3 flex gap-1">
          {project.category.slice(0, 2).map((cat) => (
            <span key={cat} className="px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-900/70 text-zinc-200 backdrop-blur-sm">
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="mb-3">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{project.tagline}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-xs border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 5 && (
            <span className="px-2 py-0.5 rounded-md text-xs text-zinc-400">+{project.techStack.length - 5}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium transition-colors"
          >
            View Details
            <ArrowUpRight size={12} />
          </Link>
          {(project.github || project.githubFE) && (
            <a
              href={project.github ?? project.githubFE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium transition-colors"
            >
              <GitHubIcon size={12} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium transition-colors"
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function SmallCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{project.tagline}</p>
        </div>
        {(project.github || project.githubFE) && (
          <a
            href={project.github ?? project.githubFE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
            aria-label="View on GitHub"
          >
            <GitHubIcon size={16} />
          </a>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md text-xs border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs text-blue-500 hover:text-blue-600 font-medium flex items-center gap-1"
        >
          Details <ArrowUpRight size={11} />
        </Link>
        <span className="text-xs text-zinc-400">{project.period}</span>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const featured = PROJECTS.filter((p) => p.featured)
  const others = PROJECTS.filter((p) => !p.featured)

  const filteredOthers = activeFilter === 'All'
    ? others
    : others.filter((p) => p.category.includes(activeFilter))

  return (
    <SectionWrapper id="projects" className="bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle="Projects I've built — from AI SaaS to full-stack platforms">
          Projects
        </SectionHeading>

        {/* Featured projects */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <Star size={14} className="text-amber-500" fill="currentColor" />
            <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Featured</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project) => (
              <FeaturedCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Other projects */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
              More Projects
            </h3>
            {/* Filter */}
            <div className="flex gap-1.5 flex-wrap">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={cn(
                    'px-3 py-1 rounded-lg text-xs font-medium transition-colors',
                    activeFilter === f
                      ? 'bg-blue-500 text-white'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredOthers.map((project) => (
                <SmallCard key={project.id} project={project} />
              ))}
              {filteredOthers.length === 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-3 text-center text-zinc-400 py-8 text-sm"
                >
                  No projects in this category yet.
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  )
}

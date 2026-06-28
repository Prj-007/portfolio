'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { SectionWrapper, SectionHeading } from '@/components/shared/SectionWrapper'
import { EXPERIENCE } from '@/constants/data'

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Real-world experience building production software">
          Work Experience
        </SectionHeading>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden sm:block absolute left-8 top-8 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-zinc-50 dark:bg-zinc-900 z-10 mt-1 shrink-0" />
              </div>

              {/* Card */}
              <div className="flex-1 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500/30 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                        <Briefcase size={18} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                          {exp.company}
                        </h3>
                        <p className="text-blue-500 text-sm font-medium">{exp.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Calendar size={13} className="text-zinc-400" />
                      <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{exp.period}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 font-medium border border-green-200 dark:border-green-500/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Tech badges */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium border border-blue-200 dark:border-blue-500/20 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View details */}
                  <Link
                    href="/projects/ai-document-summarizer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium transition-colors"
                  >
                    View Details
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

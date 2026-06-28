'use client'

import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Trophy } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '@/components/shared/SectionWrapper'
import { EDUCATION } from '@/constants/data'

export function Education() {
  return (
    <SectionWrapper id="education" className="bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="My academic background and relevant coursework">
          Education
        </SectionHeading>

        {EDUCATION.map((edu, i) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500/30 transition-colors group"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/3 transition-all duration-500" />

            <div className="relative flex flex-col sm:flex-row gap-6">
              {/* Icon */}
              <div className="shrink-0 w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <GraduationCap size={24} className="text-blue-500" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {edu.shortName}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-snug mt-0.5">
                      {edu.institution}
                    </p>
                    {edu.note && (
                      <p className="text-xs text-blue-500 font-medium mt-0.5">
                        {edu.note}
                      </p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {edu.period}
                    </span>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      {edu.degree} · {edu.field}
                    </p>
                  </div>
                </div>

                {/* Achievement highlight */}
                {edu.achievements?.map((ach) => (
                  <div key={ach} className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200/50 dark:border-amber-500/20">
                    <Trophy size={14} className="text-amber-500 shrink-0" />
                    <p className="text-sm font-medium text-amber-700 dark:text-amber-400">{ach}</p>
                  </div>
                ))}

                {/* Coursework */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen size={14} className="text-zinc-400" />
                    <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      Relevant Coursework
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-lg text-xs border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Udemy course */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
            <BookOpen size={16} className="text-purple-500" />
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">The Web Developer Bootcamp 2024</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Udemy · Full-stack MERN Curriculum · Completed 2024</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

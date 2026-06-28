'use client'

import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/shared/SectionWrapper'
import { SKILLS } from '@/constants/data'

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-3">
          // Skills
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-12">
          Stack &amp; tools
        </h2>

        {/* Rows */}
        <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800/60">
          {SKILLS.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4 py-5"
            >
              {/* Category label */}
              <div className="w-36 shrink-0 pt-0.5">
                <span className="text-xs font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                  {category.category}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900 hover:border-blue-500/40 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

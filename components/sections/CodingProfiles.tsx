'use client'

import { motion } from 'framer-motion'
import { Code, BarChart2, ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/icons'
import { SectionWrapper, SectionHeading } from '@/components/shared/SectionWrapper'
import { CODING_PROFILES } from '@/constants/data'

const iconMap: Record<string, React.ElementType> = {
  Github: GitHubIcon,
  Code,
  BarChart2,
}

export function CodingProfiles() {
  return (
    <SectionWrapper id="profiles" className="bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Where I code, track progress, and share my work">
          Coding Profiles
        </SectionHeading>

        <div className="grid sm:grid-cols-3 gap-4">
          {CODING_PROFILES.map((profile, i) => {
            const Icon = iconMap[profile.icon] ?? Code
            return (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Icon size={18} className="text-blue-500" />
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-zinc-300 dark:text-zinc-600 group-hover:text-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-500 transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5 font-mono">@{profile.username}</p>
                </div>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">
                  {profile.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {profile.stats.map((stat) => (
                    <span
                      key={stat}
                      className="px-2.5 py-1 rounded-full text-xs border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}

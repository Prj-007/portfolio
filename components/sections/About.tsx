'use client'

import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Trophy, Users } from 'lucide-react'
import { SectionWrapper, SectionHeading } from '@/components/shared/SectionWrapper'
import { PERSONAL, ACHIEVEMENTS, POSITIONS } from '@/constants/data'

export function About() {
  return (
    <SectionWrapper id="about" className="bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle="A bit about who I am and what drives me">
          About Me
        </SectionHeading>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: avatar + quick facts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl shadow-blue-500/25">
                {PERSONAL.initials}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center shadow-md">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{PERSONAL.name}</h3>
              <p className="text-blue-500 text-sm font-medium mt-0.5">{PERSONAL.role}</p>
            </div>

            {/* Quick facts */}
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <GraduationCap size={16} className="text-blue-500 shrink-0" />
                <span>B.Tech CS, RGIPT (2022–2026)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <MapPin size={16} className="text-blue-500 shrink-0" />
                <span>India · Open to Relocate / Remote</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <Trophy size={16} className="text-blue-500 shrink-0" />
                <span>Top 2% — IIT-JEE Advanced 2022</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <Users size={16} className="text-blue-500 shrink-0" />
                <span>Core Team · Arpan Social Council</span>
              </div>
            </div>

            {/* Interests */}
            <div>
              <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">Interests</p>
              <div className="flex flex-wrap gap-2">
                {PERSONAL.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-2.5 py-1 rounded-full text-xs border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 flex flex-col gap-5"
          >
            {PERSONAL.about.map((para, i) => (
              <p key={i} className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
                {para}
              </p>
            ))}

            {/* Career goal */}
            <div className="mt-2 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
              <p className="text-sm text-blue-600 dark:text-blue-400 leading-relaxed">
                <span className="font-semibold">Goal: </span>
                {PERSONAL.careerGoal}
              </p>
            </div>

            {/* Positions */}
            <div className="mt-2">
              <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
                Positions of Responsibility
              </p>
              <div className="flex flex-col gap-2">
                {POSITIONS.map((pos) => (
                  <div key={pos.role} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{pos.role}</span>
                      <span className="text-zinc-400 dark:text-zinc-500 text-xs ml-2">· {pos.period}</span>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{pos.organization}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

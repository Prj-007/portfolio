'use client'

import { useState, useEffect } from 'react'
import { motion, type Variants } from 'framer-motion'
import { Mail, FileText, ArrowDown } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { PERSONAL } from '@/constants/data'

function TypedText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = texts[index]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (displayed.length < full.length) {
        timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index, texts])

  return (
    <span>
      {displayed}
      <span className="cursor-blink text-blue-500">|</span>
    </span>
  )
}

export function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-zinc-950 grid-bg"
    >
      {/* Radial gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% -20%, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20 pb-10 relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Status badge */}
          <motion.div variants={item} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Open to SWE / AI Developer / Full-Stack Roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50"
          >
            Prajjwal{' '}
            <span className="text-blue-500">Pratap</span>{' '}
            Singh
          </motion.h1>

          {/* Typing role */}
          <motion.div
            variants={item}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-500 dark:text-zinc-400 mb-6 h-10"
          >
            <TypedText texts={PERSONAL.typingTexts} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            CS 2026 · Intern at Newgen · 300+ DSA · Full Stack · AI Developer
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-3 mb-14">
            <a
              href={PERSONAL.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              <FileText size={15} />
              Resume
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <GitHubIcon size={15} />
              GitHub
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <LinkedInIcon size={15} />
              LinkedIn
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm transition-all hover:-translate-y-0.5"
            >
              <Mail size={15} />
              Contact
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-14"
          >
            {[
              { value: '1Y+', label: 'Internship' },
              { value: '6+', label: 'Projects' },
              { value: '2026', label: 'Graduation' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{value}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="inline-flex flex-col items-center gap-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}

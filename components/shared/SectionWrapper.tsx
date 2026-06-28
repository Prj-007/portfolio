'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  id?: string
  className?: string
  children: React.ReactNode
  delay?: number
}

export function SectionWrapper({ id, className, children, delay = 0 }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={cn('py-20 px-4', className)}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeading({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">{children}</h2>
      {subtitle && <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-xl mx-auto">{subtitle}</p>}
    </div>
  )
}

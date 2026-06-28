'use client'

import { Mail, Code } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { PERSONAL } from '@/constants/data'

export function Footer() {
  const socials = [
    { icon: GitHubIcon, href: PERSONAL.github, label: 'GitHub' },
    { icon: LinkedInIcon, href: PERSONAL.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${PERSONAL.email}`, label: 'Email' },
    { icon: Code, href: PERSONAL.leetcode, label: 'LeetCode' },
  ]

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
          <span className="w-6 h-6 rounded-md bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
            {PERSONAL.initials}
          </span>
          <span>© {new Date().getFullYear()} {PERSONAL.name}</span>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-blue-500 transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}

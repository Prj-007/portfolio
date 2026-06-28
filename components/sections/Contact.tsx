'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { SectionWrapper, SectionHeading } from '@/components/shared/SectionWrapper'
import { PERSONAL } from '@/constants/data'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:${PERSONAL.email}?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  const contactLinks = [
    { icon: Mail, label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
    { icon: Phone, label: 'Phone', value: PERSONAL.phone, href: `tel:${PERSONAL.phone}` },
    { icon: GitHubIcon, label: 'GitHub', value: 'Prj-007', href: PERSONAL.github },
    { icon: LinkedInIcon, label: 'LinkedIn', value: 'prajjwalpratapsingh', href: PERSONAL.linkedin },
  ]

  return (
    <SectionWrapper id="contact" className="bg-zinc-50 dark:bg-zinc-900/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading subtitle="Let's connect — I'm actively looking for opportunities">
          Get In Touch
        </SectionHeading>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1">
                Let&apos;s work together
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                I&apos;m actively seeking SWE, Backend, Full-Stack, or AI Engineer roles (2026 grad). Feel free to reach out!
              </p>
            </div>

            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-500/30 hover:shadow-md transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Icon size={15} className="text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">{label}</p>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-blue-500 transition-colors truncate">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="px-3 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="px-3 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about the opportunity or just say hi..."
                  className="px-3 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={15} />
                    Opening your mail client...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-zinc-400 text-center">
                This will open your mail client. Or email me directly at{' '}
                <a href={`mailto:${PERSONAL.email}`} className="text-blue-500 hover:underline">
                  {PERSONAL.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

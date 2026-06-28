import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Prajjwal Pratap Singh — Full Stack Developer',
  description:
    'CS 2026 Graduate skilled in React, Spring Boot, Node.js, MongoDB, and AI-powered applications. Internship at Newgen Software Technologies. Open to SWE / Backend / Full-Stack roles.',
  keywords: [
    'Prajjwal Pratap Singh',
    'Full Stack Developer',
    'Backend Engineer',
    'MERN Stack',
    'Spring Boot',
    'React',
    'Node.js',
    'MongoDB',
    'Java',
    'Software Engineer',
    'RGIPT',
    'Fresher 2026',
  ],
  authors: [{ name: 'Prajjwal Pratap Singh' }],
  openGraph: {
    title: 'Prajjwal Pratap Singh — Full Stack Developer',
    description:
      'CS 2026 Graduate. Building AI-powered full-stack applications and scalable backend systems. Internship at Newgen Software Technologies.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prajjwal Pratap Singh — Full Stack Developer',
    description: 'CS 2026 Graduate. Full Stack · Backend · AI Apps.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

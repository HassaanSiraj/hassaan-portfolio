import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { RootProvider } from '@/components/RootProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hassaan Siraj | Full Stack Developer',
  description: 'Full Stack Developer specializing in Ruby on Rails, Node.js, Python, React.js, and Vue.js. Building fast, reliable, and scalable digital experiences.',
  keywords: ['Hassaan Siraj', 'Full Stack Developer', 'Ruby on Rails', 'Node.js', 'Python', 'React', 'Vue.js', 'Blockchain', 'Web Development'],
  authors: [{ name: 'Hassaan Siraj' }],
  creator: 'Hassaan Siraj',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/portfolio.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hassaansiraj.com',
    title: 'Hassaan Siraj | Full Stack Developer',
    description: 'Full Stack Developer specializing in Ruby on Rails, Node.js, Python, React.js, and Vue.js. Building fast, reliable, and scalable digital experiences.',
    siteName: 'Hassaan Siraj Portfolio',
    images: ['/portfolio.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hassaan Siraj | Full Stack Developer',
    description: 'Full Stack Developer specializing in Ruby on Rails, Node.js, Python, React.js, and Vue.js.',
    images: ['/portfolio.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}


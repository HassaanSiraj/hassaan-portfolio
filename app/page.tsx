'use client'

import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import About from '@/components/About'
import ImpactStats from '@/components/ImpactStats'
import StorySection from '@/components/StorySection'
import Quote from '@/components/Quote'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white dark-mode">
      <Navigation />
      <ThemeToggle />
      <Hero />
      <TechStack />
      <About />
      <ImpactStats />
      <Experience />
      <StorySection />
      <Quote />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}


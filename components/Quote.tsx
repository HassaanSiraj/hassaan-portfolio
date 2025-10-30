'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/ThemeContext'
import { Code2 } from 'lucide-react'

const Quote = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section className={`relative py-32 overflow-hidden ${theme === 'light' ? 'bg-sky-200' : ''}`}>
      {/* Background with breathing */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-sky-200 via-sky-100 to-sky-200' : 'bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]'}`}></div>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${theme === 'light' ? 'bg-gradient-to-r from-blue-300/20 to-cyan-300/20' : 'bg-gradient-cyber opacity-10'} rounded-full blur-3xl gentle-pulse`}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Code Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block mb-8"
          >
            <div className={`w-20 h-20 rounded-full ${theme === 'light' ? 'bg-blue-400' : 'bg-gradient-cyber'} flex items-center justify-center mx-auto glow-cyber`}>
              <Code2 size={40} className="text-white" />
            </div>
          </motion.div>

          {/* Quote */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight ${theme === 'light' ? 'text-slate-900' : ''}`}
          >
            <span className={theme === 'light' ? 'text-slate-700' : 'text-white'}>It's not about where you </span>
            <span className="gradient-text">start</span>
            <span className={theme === 'light' ? 'text-slate-700' : 'text-white'}>, it's about </span>
            <span className="gradient-text">building</span>
            <span className={theme === 'light' ? 'text-slate-700' : 'text-white'}> something that </span>
            <span className="gradient-text">matters</span>
            <span className={theme === 'light' ? 'text-slate-700' : 'text-white'}>.</span>
          </motion.h2>

          {/* Signature Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="h-1 w-64 bg-gradient-cyber mx-auto rounded-full"
          ></motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 text-xl text-gray-400 font-mono"
          >
            // From idea to production, one commit at a time
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default Quote


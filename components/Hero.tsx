'use client'

import { motion } from 'framer-motion'
import { Download, Briefcase } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import DayHeroBackground from './DayHeroBackground'
import NightHeroBackground from './NightHeroBackground'

const Hero = () => {
  const { theme } = useTheme()

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ border: 'none', outline: 'none' }}
    >
      {/* Conditional Background based on theme */}
      {theme === 'light' ? <DayHeroBackground /> : <NightHeroBackground />}

      {/* Gradient Overlay - theme aware */}
      <div 
        className={`absolute inset-0 z-10 pointer-events-none ${
          theme === 'light'
            ? 'bg-gradient-to-b from-transparent via-sky-50/20 to-sky-50/40'
            : 'bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f]'
        }`}
        style={{ border: 'none', outline: 'none' }}
      ></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className={`text-lg sm:text-xl mb-4 ${theme === 'light' ? 'text-sky-700' : 'text-gray-400'}`}
          >
            <motion.span
              animate={{ 
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Hi, I'm
            </motion.span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 ${theme === 'light' ? 'text-slate-900' : ''}`}
          >
            <span className={theme === 'light' ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : 'gradient-text'}>Hassaan Siraj</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-slate-800' : 'text-white'}`}>
              Full Stack Developer
            </h2>
            <div className={`flex items-center justify-center gap-3 font-mono text-sm sm:text-base ${theme === 'light' ? 'text-sky-700' : 'text-gray-400'}`}>
              <span className={theme === 'light' ? 'text-purple-600 font-bold' : 'text-purple-400'}>Ruby on Rails</span>
              <span>•</span>
              <span className={theme === 'light' ? 'text-blue-600 font-bold' : 'text-blue-400'}>React.js</span>
              <span>•</span>
              <span className={theme === 'light' ? 'text-green-600 font-bold' : 'text-green-400'}>Node.js</span>
              <span>•</span>
              <span className={theme === 'light' ? 'text-yellow-600 font-bold' : 'text-yellow-400'}>Python</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-8 text-sm sm:text-base ${theme === 'light' ? 'text-sky-600' : 'text-gray-400'}`}
          >
            <div className="flex items-center gap-2">
              <span className={`inline-block w-2 h-2 rounded-full ${theme === 'light' ? 'bg-green-600' : 'bg-green-400'} animate-pulse`}></span>
              <span>Available for opportunities</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span>🌍</span>
              <span>Remote, Available Worldwide</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className={`text-xl sm:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed ${theme === 'light' ? 'text-slate-700' : 'text-gray-300'}`}
          >
            Building <span className={`font-semibold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>fast</span>, <span className={`font-semibold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>reliable</span>, and <span className={`font-semibold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>scalable</span> digital experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="#projects"
              className={`group relative px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2 overflow-hidden ${
                theme === 'light'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-purple-400'
                  : 'bg-gradient-cyber'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: theme === 'light'
                  ? ['0 0 20px rgba(37, 99, 235, 0.3)', '0 0 30px rgba(147, 51, 234, 0.5)', '0 0 20px rgba(37, 99, 235, 0.3)']
                  : ['0 0 20px rgba(168, 85, 247, 0.3)', '0 0 30px rgba(168, 85, 247, 0.5)', '0 0 20px rgba(168, 85, 247, 0.3)'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Briefcase size={20} />
                View Projects
              </span>
              <div className={`absolute inset-0 bg-gradient-to-r ${theme === 'light' ? 'from-purple-600 to-blue-600' : 'from-purple-600 to-blue-600'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className={`group px-8 py-4 glass-strong rounded-full font-semibold text-lg flex items-center gap-2 transition-all duration-300 ${theme === 'light' ? 'text-slate-800 bg-white/60 hover:bg-white/80 border border-blue-200' : 'text-white hover:bg-white/10'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

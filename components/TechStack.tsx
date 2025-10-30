'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/ThemeContext'

const TechStack = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technologies = [
    { name: 'Ruby on Rails', color: 'text-red-400' },
    { name: 'Node.js', color: 'text-green-400' },
    { name: 'Python', color: 'text-blue-400' },
    { name: 'React.js', color: 'text-cyan-400' },
    { name: 'Vue.js', color: 'text-emerald-400' },
    { name: 'TypeScript', color: 'text-blue-500' },
    { name: 'PostgreSQL', color: 'text-indigo-400' },
    { name: 'MongoDB', color: 'text-green-500' },
    { name: 'Redis', color: 'text-red-500' },
    { name: 'Docker', color: 'text-blue-400' },
    { name: 'AWS', color: 'text-orange-400' },
    { name: 'Stripe', color: 'text-purple-400' },
  ]

  return (
    <section className={`relative py-16 overflow-hidden ${theme === 'light' ? 'bg-sky-200' : ''}`}>
      {/* Background */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'bg-sky-200 opacity-30' : 'bg-[#0a0a0f] opacity-50'}`}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className={`text-sm uppercase tracking-wider mb-8 font-mono ${theme === 'light' ? 'text-slate-600' : 'text-gray-500'}`}>
            // Technologies I work with
          </p>
          
          {/* Scrolling Tech Stack */}
          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
              className="flex gap-8 whitespace-nowrap"
            >
              {/* Duplicate for seamless loop */}
              {[...technologies, ...technologies, ...technologies].map((tech, index) => (
                <motion.span
                  key={index}
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold ${tech.color} opacity-20 hover:opacity-100 transition-all duration-500`}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  animate={{
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.1,
                    ease: "easeInOut"
                  }}
                >
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack


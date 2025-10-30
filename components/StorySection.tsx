'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'
import { Terminal, Rocket, Target, Sparkles } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const StorySection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const timeline = [
    {
      icon: <Terminal size={32} />,
      year: 'The Beginning',
      title: 'First Line of Code',
      description: 'Started coding with a simple "Hello World". That spark ignited a passion for solving problems and building solutions.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Rocket size={32} />,
      year: 'The Growth',
      title: 'Building Real Solutions',
      description: 'Joined Devsinc, working with US clients on healthcare systems, social platforms, and supply chain solutions. Turned ideas into production-ready applications.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Target size={32} />,
      year: 'The Impact',
      title: 'Scaling to 100K+ Users',
      description: 'Optimized systems, integrated complex APIs, and implemented blockchain solutions. Every line of code reached thousands of users.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Sparkles size={32} />,
      year: 'The Future',
      title: 'What\'s Next',
      description: 'Continuously learning, building, and pushing boundaries. The best code is yet to be written.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  const { theme } = useTheme()

  return (
    <section className={`relative py-20 sm:py-32 overflow-hidden ${theme === 'light' ? 'bg-sky-200' : ''}`}>
      {/* Background with breathing */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-sky-200 via-sky-100 to-sky-200' : 'bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]'}`}></div>
      <div className={`absolute top-1/4 right-1/4 w-96 h-96 ${theme === 'light' ? 'bg-purple-300/20' : 'bg-purple-500/10'} rounded-full blur-3xl gentle-pulse`} style={{animationDelay: '2s'}}></div>
      <div className={`absolute bottom-1/4 left-1/4 w-96 h-96 ${theme === 'light' ? 'bg-blue-300/20' : 'bg-blue-500/10'} rounded-full blur-3xl gentle-pulse`}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="text-6xl">📖</div>
          </motion.div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${theme === 'light' ? 'text-slate-900' : ''}`}>
            The <span className="gradient-text">Journey</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-700' : 'text-gray-400'}`}>
            From curious beginner to full-stack developer — a story of continuous growth
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connecting Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform -translate-x-1/2 hidden md:block"
          ></motion.div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
              }`}
            >
              <div className={`flex flex-col md:flex-row items-start gap-6 ${
                index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
              }`}>
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass-strong rounded-2xl p-8 flex-1 relative overflow-hidden group"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} mb-4`}
                    >
                      {item.icon}
                    </motion.div>
                    
                    <motion.span
                      className={`inline-block px-4 py-1 rounded-full text-sm font-mono mb-3 bg-gradient-to-r ${item.gradient} bg-opacity-20 text-gray-300`}
                    >
                      {item.year}
                    </motion.span>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.3 }}
                  className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center"
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg`}>
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.gradient} animate-ping opacity-75`}></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default StorySection


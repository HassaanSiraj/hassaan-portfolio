'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/ThemeContext'
import { Code2, Users, Zap, Award } from 'lucide-react'

const ImpactStats = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const stats = [
    {
      icon: <Code2 size={40} />,
      value: '5+',
      label: 'Years of Experience',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Users size={40} />,
      value: '100K+',
      label: 'Users Impacted',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Zap size={40} />,
      value: '50+',
      label: 'Projects Delivered',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <Award size={40} />,
      value: '10+',
      label: 'Technologies Mastered',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section className={`relative py-20 overflow-hidden ${theme === 'light' ? 'bg-sky-200' : ''}`}>
      {/* Background with breathing */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-sky-200 via-sky-100 to-sky-200' : 'bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]'}`}></div>
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ${theme === 'light' ? 'bg-gradient-to-r from-blue-300/20 to-cyan-300/20' : 'bg-gradient-cyber opacity-5'} rounded-full blur-3xl gentle-pulse`}></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-slate-900' : ''}`}>
            <span className={theme === 'light' ? 'text-slate-600' : ''}>Results</span>
          </h2>
          <p className={theme === 'light' ? 'text-slate-700' : 'text-gray-400'}>Measurable impact across every project</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong rounded-2xl p-6 sm:p-8 text-center hover:scale-105 transition-all duration-300 group"
            >
              <motion.div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats


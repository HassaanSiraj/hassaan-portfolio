'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/ThemeContext'
import { Building2, Calendar, Briefcase } from 'lucide-react'

const Experience = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="experience" className={`relative py-20 sm:py-28 overflow-hidden ${theme === 'light' ? 'bg-sky-200' : ''}`}>
      {/* Background with breathing */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-sky-200 via-sky-100 to-sky-200' : 'bg-gradient-to-b from-[#0a0a0f] via-[#111322] to-[#0a0a0f]'}`}></div>
      <div className={`absolute top-1/4 left-1/5 w-72 h-72 ${theme === 'light' ? 'bg-blue-300/30' : 'bg-blue-500/10'} rounded-full blur-3xl gentle-pulse`}></div>
      <div className={`absolute bottom-1/4 right-1/5 w-72 h-72 ${theme === 'light' ? 'bg-purple-300/30' : 'bg-purple-500/10'} rounded-full blur-3xl gentle-pulse`} style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${theme === 'light' ? 'text-slate-900' : ''}`}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-cyber mx-auto rounded-full"></div>
        </motion.div>

        {/* Company Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-strong rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Building2 size={24} className="text-white" />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${theme === 'light' ? 'text-slate-900' : ''}`}>Devsinc</h3>
                <p className={theme === 'light' ? 'text-slate-600' : 'text-gray-400'}>Full Stack Developer • Remote</p>
              </div>
            </div>
            <div className={`flex items-center gap-2 ${theme === 'light' ? 'text-slate-600' : 'text-gray-400'}`}>
              <Calendar size={16} />
              <span>2021 — Present</span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            Building scalable applications for US-based clients across healthcare, social platforms, and supply chain.
            Focused on backend integrations, performance, and crafting delightful frontends.
          </p>

          {/* Projects quick list */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Briefcase size={18} className="text-blue-400 mt-1" />
              <div>
                <p className="font-semibold text-white">Validic Healthcare Platform</p>
                <p className="text-gray-400 text-sm">Enterprise healthcare integrations and backend optimizations.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase size={18} className="text-purple-400 mt-1" />
              <div>
                <p className="font-semibold text-white">Doctors Galaxy</p>
                <p className="text-gray-400 text-sm">Professional social network with posts, video uploads, and wallet (Reown.js).</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase size={18} className="text-emerald-400 mt-1" />
              <div>
                <p className="font-semibold text-white">BARQ Supply Chain</p>
                <p className="text-gray-400 text-sm">Payments (Stripe, Apple Pay, Google Pay) and scalability improvements.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

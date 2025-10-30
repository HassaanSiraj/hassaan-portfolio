'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/ThemeContext'
import { ExternalLink, Github, Award, Users, Zap, Shield } from 'lucide-react'

const Projects = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Validic Healthcare Platform',
      subtitle: 'Enterprise Healthcare Integration System',
      description: 'A comprehensive healthcare data integration platform connecting multiple providers, wearables, and health systems. Optimized backend performance and streamlined data synchronization across distributed systems.',
      icon: <Shield size={32} />,
      gradient: 'from-blue-500 to-cyan-500',
      tags: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'REST APIs', 'Healthcare'],
      highlights: [
        'Reduced integration failures by 60%',
        'Optimized API response times by 45%',
        'Integrated 50+ healthcare data providers',
      ],
      impact: '100K+ Users',
    },
    {
      title: 'Doctors Galaxy',
      subtitle: 'Professional Social Network for Healthcare',
      description: 'A sophisticated social platform connecting doctors, students, and alumni. Features include rich post creation, video uploads, blockchain wallet integration, and real-time interactions.',
      icon: <Users size={32} />,
      gradient: 'from-purple-500 to-pink-500',
      tags: ['Ruby on Rails', 'React.js', 'Reown.js', 'AWS S3', 'WebSockets', 'Blockchain'],
      highlights: [
        'Built complete social post system',
        'Integrated blockchain wallet (Reown.js)',
        'Video upload with AWS S3',
        'Real-time notifications',
      ],
      impact: 'Real-time Platform',
      github: '#',
    },
    {
      title: 'BARQ Supply Chain',
      subtitle: 'Next-Gen Logistics & Supply Chain Platform',
      description: 'Modern supply chain management platform with advanced payment processing, real-time tracking, and scalable microservices architecture. Handles complex logistics operations efficiently.',
      icon: <Zap size={32} />,
      gradient: 'from-orange-500 to-red-500',
      tags: ['Ruby on Rails', 'Vue.js', 'Stripe', 'Apple Pay', 'Google Pay', 'Docker'],
      highlights: [
        'Multi-provider payment system',
        'Improved performance by 50%',
        'Scaled to handle 10x traffic',
        'Microservices architecture',
      ],
      impact: '10x Growth',
      link: '#',
    },
  ]

  return (
    <section id="projects" className={`relative py-20 sm:py-32 overflow-hidden ${theme === 'light' ? 'bg-sky-200' : ''}`}>
      {/* Background with breathing */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-sky-200 via-sky-100 to-sky-200' : 'bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]'}`}></div>
      <div className={`absolute top-1/3 right-0 w-96 h-96 ${theme === 'light' ? 'bg-purple-300/20' : 'bg-purple-500/10'} rounded-full blur-3xl gentle-pulse`} style={{animationDelay: '1.5s'}}></div>
      <div className={`absolute bottom-1/3 left-0 w-96 h-96 ${theme === 'light' ? 'bg-blue-300/20' : 'bg-blue-500/10'} rounded-full blur-3xl gentle-pulse`}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
            className="inline-block mb-6"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl"
            >
              🚀
            </motion.div>
          </motion.div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${theme === 'light' ? 'text-slate-900' : ''}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1 bg-gradient-cyber mx-auto rounded-full mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-lg max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-700' : 'text-gray-400'}`}
          >
            Showcasing impactful solutions built for real-world challenges
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="glass-strong rounded-2xl p-6 h-full flex flex-col hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Icon & Title */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-cyber transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-sm text-purple-400 font-medium mb-3">{project.subtitle}</p>
                
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                {/* Highlights */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-purple-400 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gradient-cyber/10 rounded text-xs text-blue-300 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Impact Badge */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-yellow-400" />
                    <span className="text-sm font-semibold text-yellow-400">{project.impact}</span>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-cyber rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects


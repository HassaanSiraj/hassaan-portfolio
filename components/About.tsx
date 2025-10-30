'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/ThemeContext'
import { Code2, Database, Blocks, Globe } from 'lucide-react'

const About = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: 'Full Stack Expertise',
      description: 'Proficient in both frontend and backend technologies, creating seamless end-to-end solutions.',
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Mastery',
      description: 'Specialized in Ruby on Rails with strong experience in Node.js and Python for scalable systems.',
    },
    {
      icon: <Blocks size={32} />,
      title: 'System Integration',
      description: 'Expert at integrating complex systems, APIs, and third-party services for comprehensive solutions.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Collaboration',
      description: 'Extensive experience working with US clients, delivering high-quality solutions across time zones.',
    },
  ]

  return (
    <section id="about" className={`relative py-20 sm:py-32 overflow-hidden ${theme === 'light' ? 'bg-sky-200' : ''}`}>
      {/* Background Elements with breathing effect */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-sky-200 via-sky-100 to-sky-200' : 'bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]'}`}></div>
      <div className={`absolute top-1/4 left-0 w-96 h-96 ${theme === 'light' ? 'bg-blue-200/40' : 'bg-blue-500/10'} rounded-full blur-3xl gentle-pulse`}></div>
      <div className={`absolute bottom-1/4 right-0 w-96 h-96 ${theme === 'light' ? 'bg-purple-200/40' : 'bg-purple-500/10'} rounded-full blur-3xl gentle-pulse`} style={{animationDelay: '3s'}}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="text-6xl">👨‍💻</div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1 bg-gradient-cyber mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">
                Crafting Digital Excellence
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                I'm a passionate Full Stack Developer with a proven track record of building 
                scalable applications that solve real-world problems. My expertise lies in 
                creating robust backend systems with <span className="text-blue-400 font-semibold">Ruby on Rails</span> while 
                crafting intuitive user interfaces with modern JavaScript frameworks.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                With extensive experience working with <span className="text-purple-400 font-semibold">US-based clients</span>, 
                I've contributed to healthcare systems, social platforms, and supply chain solutions 
                that serve thousands of users daily. I specialize in integrating complex systems, 
                implementing payment solutions, and leveraging emerging technologies like blockchain.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                My approach combines technical excellence with a deep understanding of business needs, 
                ensuring that every line of code I write contributes to meaningful user experiences 
                and business outcomes.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-strong rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-purple-400 mb-4">{highlight.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-white">{highlight.title}</h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section - Key Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-strong rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Primary <span className="gradient-text">Tech Stack</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Ruby on Rails', 'Node.js', 'Python', 'React.js', 'Vue.js', 'TypeScript', 'PostgreSQL', 'MongoDB'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                className="px-6 py-3 glass rounded-full text-gray-300 hover:text-white hover:bg-gradient-cyber transition-all duration-300 font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


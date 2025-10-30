'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/ThemeContext'
import { Code, Server, Layout, Blocks, Database, Cloud, Wallet, Plug } from 'lucide-react'

const Skills = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Server size={32} />,
      color: 'from-blue-500 to-cyan-500',
      skills: ['Ruby on Rails', 'Node.js', 'Python', 'Express.js'],
    },
    {
      title: 'Frontend Development',
      icon: <Layout size={32} />,
      color: 'from-purple-500 to-pink-500',
      skills: ['React.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Database & Caching',
      icon: <Database size={32} />,
      color: 'from-green-500 to-emerald-500',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud size={32} />,
      color: 'from-orange-500 to-red-500',
      skills: ['AWS', 'Docker', 'CI/CD', 'Heroku'],
    },
    {
      title: 'Integrations',
      icon: <Plug size={32} />,
      color: 'from-yellow-500 to-orange-500',
      skills: ['Stripe API', 'REST APIs', 'GraphQL', 'Webhooks'],
    },
    {
      title: 'Blockchain',
      icon: <Wallet size={32} />,
      color: 'from-indigo-500 to-purple-500',
      skills: ['Reown.js', 'Web3.js', 'Smart Contracts', 'Wallet Integration'],
    },
  ]

  const tools = [
    'Git', 'GitHub', 'Jira', 'Postman', 'VS Code', 'Figma',
    'Slack', 'Linear', 'Vercel', 'Sidekiq', 'RSpec', 'Jest'
  ]

  return (
    <section id="skills" className={`relative py-20 sm:py-32 overflow-hidden ${theme === 'light' ? 'bg-sky-200' : ''}`}>
      {/* Background with breathing */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'bg-sky-200' : 'bg-[#0a0a0f]'}`}></div>
      <div className={`absolute top-0 left-0 w-96 h-96 ${theme === 'light' ? 'bg-blue-300/30' : 'bg-blue-500/10'} rounded-full blur-3xl gentle-pulse`}></div>
      <div className={`absolute bottom-0 right-0 w-96 h-96 ${theme === 'light' ? 'bg-purple-300/30' : 'bg-purple-500/10'} rounded-full blur-3xl gentle-pulse`} style={{animationDelay: '3s'}}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, type: "spring", delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="text-6xl">⚡</div>
          </motion.div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 ${theme === 'light' ? 'text-slate-900' : ''}`}>
            Skills & <span className="gradient-text">Expertise</span>
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
            A comprehensive toolkit for building modern, scalable applications
          </motion.p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
              className="glass-strong rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + skillIndex * 0.1 }}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 text-gray-200 font-medium text-sm hover:scale-105 transition-transform duration-200 cursor-default border border-opacity-20`}
                    style={{
                      borderColor: 'currentColor',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass-strong rounded-2xl p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code className="text-purple-400" size={28} />
            <h3 className="text-2xl font-bold">
              Tools & <span className="gradient-text">Technologies</span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-5 py-3 glass rounded-xl text-gray-300 hover:text-white hover:bg-gradient-cyber transition-all duration-300 font-medium cursor-pointer"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold gradient-text mb-2">5+</div>
            <p className="text-gray-400">Years Experience</p>
          </div>
          <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold gradient-text mb-2">100K+</div>
            <p className="text-gray-400">Users Impacted</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


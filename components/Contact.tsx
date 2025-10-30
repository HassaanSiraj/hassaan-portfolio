'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTheme } from '@/context/ThemeContext'
import { Mail, MapPin, Coffee, Github, Linkedin, Send, Loader } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Form state
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.from_name,
          email: formData.from_email,
          message: formData.message,
          
          time: new Date().toLocaleString(),
        }
      )
      setSubmitStatus('success')
      setFormData({ from_name: '', from_email: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Email error:', error)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'work.hassaan.siraj@gmail.com',
      link: 'mailto:work.hassaan.siraj@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Remote, Available Worldwide',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Coffee size={24} />,
      label: 'Availability',
      value: 'Open to opportunities',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      link: 'https://github.com/HassaanSiraj',
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      link: 'https://www.linkedin.com/in/hassaansiraj/',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      link: 'mailto:work.hassaan.siraj@gmail.com',
      color: 'hover:text-purple-400',
    },
  ]

  return (
    <section id="contact" className={`relative py-12 sm:py-16 overflow-hidden ${theme === 'light' ? 'bg-sky-200' : ''}`}>
      {/* Background with breathing */}
      <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gradient-to-b from-sky-200 via-sky-100 to-sky-200' : 'bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]'}`}></div>
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${theme === 'light' ? 'bg-purple-300/20' : 'bg-purple-500/10'} rounded-full blur-3xl gentle-pulse`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${theme === 'light' ? 'bg-blue-300/20' : 'bg-blue-500/10'} rounded-full blur-3xl gentle-pulse`} style={{animationDelay: '3s'}}></div>

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
            <div className="text-6xl">👋</div>
          </motion.div>
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${theme === 'light' ? 'text-slate-900' : ''}`}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1 bg-gradient-cyber mx-auto rounded-full mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-lg mb-4 ${theme === 'light' ? 'text-slate-700' : 'text-gray-400'}`}
          >
            Let's build something amazing together
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`text-base max-w-2xl mx-auto ${theme === 'light' ? 'text-slate-600' : 'text-gray-500'}`}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need a full-stack solution or want to collaborate on something innovative, let's connect!
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={info.link ? "cursor-pointer" : ""}
                onClick={() => info.link && window.open(info.link, '_blank')}
              >
                <div className="glass-strong rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-300">{info.label}</h3>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main CTA Card with Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-strong rounded-2xl p-8 sm:p-12 text-center mb-12"
          >
            <div className="max-w-2xl mx-auto">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-cyber flex items-center justify-center text-white">
                  <Send size={32} />
                </div>
              </motion.div>
              
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Ready to Start Your Project?
              </h3>
              <p className={`mb-8 text-lg ${theme === 'light' ? 'text-slate-700' : 'text-gray-300'}`}>
                I'm currently available for freelance work and full-time opportunities. 
                Let's discuss how I can help bring your ideas to life.
              </p>
              
              <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all ${theme === 'light' ? 'bg-sky-100/50 border-sky-300 text-slate-900 placeholder-slate-600' : ''}`}
                  />
                  
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all ${theme === 'light' ? 'bg-sky-100/50 border-sky-300 text-slate-900 placeholder-slate-600' : ''}`}
                  />
                  
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all resize-none ${theme === 'light' ? 'bg-sky-100/50 border-sky-300 text-slate-900 placeholder-slate-600' : ''}`}
                  />
                  
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full px-8 py-3 bg-gradient-cyber rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                    whileHover={!isLoading ? { scale: 1.05 } : {}}
                    whileTap={!isLoading ? { scale: 0.95 } : {}}
                  >
                    {isLoading ? (
                      <>
                        <Loader size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center"
                    >
                      ✅ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center"
                    >
                      ❌ Failed to send message. Please try again or email me directly.
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <p className={`mb-6 ${theme === 'light' ? 'text-slate-600' : 'text-gray-400'}`}>Or find me on social media</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass rounded-full p-4 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 mt-8 pt-4 pb-4 border-t border-white/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              Designed & Built by <span className="gradient-text font-semibold">Hassaan Siraj</span>
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}

export default Contact

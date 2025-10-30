'use client'

import { useTheme } from '@/context/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until after hydration
  if (!mounted) return null

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-7 right-6 z-50 p-3 rounded-full glass-strong hover:scale-110 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: theme === 'light' 
          ? '0 0 20px rgba(255, 193, 7, 0.3)' 
          : '0 0 20px rgba(147, 112, 219, 0.3)',
      }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'light' ? (
          <Sun size={24} className="text-yellow-400" />
        ) : (
          <Moon size={24} className="text-purple-400" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle

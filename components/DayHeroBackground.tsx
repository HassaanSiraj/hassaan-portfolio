'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const DayHeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Beautiful cyan to light blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-300 via-sky-300 to-sky-200" />

      {/* Animated Sun - Pure CSS, perfectly round and orange */}
      <motion.div
        className="absolute w-40 h-40 rounded-full"
        style={{
          top: '15%',
          left: '8%',
          background: 'radial-gradient(circle at 30% 30%, #FFD54F, #FF9800, #FF6B35)',
          boxShadow: `
            0 0 40px rgba(255, 152, 0, 0.8),
            0 0 60px rgba(255, 107, 53, 0.5),
            0 0 80px rgba(255, 152, 0, 0.3)
          `,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Expanding ray ring 1 - goes outward and fades */}
        <motion.div
          className="absolute rounded-full border-2 border-orange-300"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '160px',
            height: '160px',
          }}
          animate={{
            width: ['160px', '360px'],
            height: ['160px', '360px'],
            opacity: [0.4, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0,
          }}
        />

        {/* Expanding ray ring 2 - goes outward and fades with delay */}
        <motion.div
          className="absolute rounded-full border border-orange-400"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '160px',
            height: '160px',
          }}
          animate={{
            width: ['160px', '380px'],
            height: ['160px', '380px'],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0.4,
          }}
        />

        {/* Expanding ray ring 3 - goes outward and fades with more delay */}
        <motion.div
          className="absolute rounded-full border border-orange-300"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '160px',
            height: '160px',
          }}
          animate={{
            width: ['160px', '400px'],
            height: ['160px', '400px'],
            opacity: [0.2, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0.8,
          }}
        />
      </motion.div>

      {/* Cloud 1 - Top center */}
      <motion.div
        className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: [-100, 200],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative w-64 h-32">
          <div className="absolute w-16 h-16 bg-white rounded-full" style={{ top: '8px', left: '-4px' }} />
          <div className="absolute w-20 h-20 bg-white rounded-full" style={{ top: '-2px', left: '10px' }} />
          <div className="absolute w-24 h-24 bg-white rounded-full" style={{ top: '-4px', left: '24px' }} />
          <div className="absolute w-20 h-20 bg-white rounded-full" style={{ top: '-2px', left: '40px' }} />
          <div className="absolute w-16 h-16 bg-white rounded-full" style={{ top: '8px', left: '50px' }} />
        </div>
      </motion.div>

      {/* Cloud 2 - Upper right */}
      <motion.div
        className="absolute top-32 right-32 -translate-y-1/2"
        animate={{
          x: [-150, 250],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative w-56 h-28">
          <div className="absolute w-14 h-14 bg-white rounded-full" style={{ top: '6px', left: '-2px' }} />
          <div className="absolute w-18 h-18 bg-white rounded-full" style={{ top: '-2px', left: '10px' }} />
          <div className="absolute w-20 h-20 bg-white rounded-full" style={{ top: '-4px', left: '22px' }} />
          <div className="absolute w-18 h-18 bg-white rounded-full" style={{ top: '-2px', left: '36px' }} />
          <div className="absolute w-14 h-14 bg-white rounded-full" style={{ top: '6px', left: '46px' }} />
        </div>
      </motion.div>

      {/* Cloud 3 - Left side of name */}
      <motion.div
        className="absolute top-1/3 left-12 -translate-y-1/2"
        animate={{
          x: [-80, 220],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.5,
        }}
      >
        <div className="relative w-48 h-24">
          <div className="absolute w-12 h-12 bg-white rounded-full" style={{ top: '5px', left: '-2px' }} />
          <div className="absolute w-16 h-16 bg-white rounded-full" style={{ top: '-3px', left: '8px' }} />
          <div className="absolute w-18 h-18 bg-white rounded-full" style={{ top: '-4px', left: '18px' }} />
          <div className="absolute w-16 h-16 bg-white rounded-full" style={{ top: '-3px', left: '30px' }} />
          <div className="absolute w-12 h-12 bg-white rounded-full" style={{ top: '5px', left: '38px' }} />
        </div>
      </motion.div>

      {/* Cloud 4 - Right side of name */}
      <motion.div
        className="absolute top-1/3 right-16 -translate-y-1/2"
        animate={{
          x: [-120, 280],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.7,
        }}
      >
        <div className="relative w-60 h-30">
          <div className="absolute w-16 h-16 bg-white rounded-full" style={{ top: '6px', left: '-2px' }} />
          <div className="absolute w-20 h-20 bg-white rounded-full" style={{ top: '-2px', left: '12px' }} />
          <div className="absolute w-24 h-24 bg-white rounded-full" style={{ top: '-4px', left: '24px' }} />
          <div className="absolute w-20 h-20 bg-white rounded-full" style={{ top: '-2px', left: '40px' }} />
          <div className="absolute w-16 h-16 bg-white rounded-full" style={{ top: '6px', left: '50px' }} />
        </div>
      </motion.div>

      {/* Cloud 5 - Below title */}
      <motion.div
        className="absolute top-1/2 left-1/3 -translate-y-1/2"
        animate={{
          x: [-100, 240],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.2,
        }}
      >
        <div className="relative w-44 h-22">
          <div className="absolute w-11 h-11 bg-white rounded-full" style={{ top: '4px', left: '-1px' }} />
          <div className="absolute w-14 h-14 bg-white rounded-full" style={{ top: '-2px', left: '7px' }} />
          <div className="absolute w-16 h-16 bg-white rounded-full" style={{ top: '-3px', left: '16px' }} />
          <div className="absolute w-14 h-14 bg-white rounded-full" style={{ top: '-2px', left: '26px' }} />
        </div>
      </motion.div>

      {/* Cloud 6 - Bottom right */}
      <motion.div
        className="absolute bottom-32 right-20"
        animate={{
          x: [-140, 300],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'linear',
          delay: 1,
        }}
      >
        <div className="relative w-48 h-24">
          <div className="absolute w-12 h-12 bg-white rounded-full" style={{ top: '5px', left: '-2px' }} />
          <div className="absolute w-16 h-16 bg-white rounded-full" style={{ top: '-3px', left: '8px' }} />
          <div className="absolute w-18 h-18 bg-white rounded-full" style={{ top: '-4px', left: '18px' }} />
          <div className="absolute w-16 h-16 bg-white rounded-full" style={{ top: '-3px', left: '30px' }} />
          <div className="absolute w-12 h-12 bg-white rounded-full" style={{ top: '5px', left: '38px' }} />
        </div>
      </motion.div>

      {/* Cloud 7 - Lower left */}
      <motion.div
        className="absolute bottom-24 left-20"
        animate={{
          x: [-90, 210],
        }}
        transition={{
          duration: 23,
          repeat: Infinity,
          ease: 'linear',
          delay: 0.3,
        }}
      >
        <div className="relative w-48 h-24">
          <div className="absolute w-12 h-12 bg-white rounded-full" style={{ top: '5px', left: '-2px' }} />
          <div className="absolute w-16 h-16 bg-white rounded-full" style={{ top: '-3px', left: '8px' }} />
          <div className="absolute w-18 h-18 bg-white rounded-full" style={{ top: '-4px', left: '18px' }} />
          <div className="absolute w-16 h-16 bg-white rounded-full" style={{ top: '-3px', left: '30px' }} />
          <div className="absolute w-12 h-12 bg-white rounded-full" style={{ top: '5px', left: '38px' }} />
        </div>
      </motion.div>
    </div>
  )
}

export default DayHeroBackground

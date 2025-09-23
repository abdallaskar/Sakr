'use client'

import { motion } from 'framer-motion' // Updated to use 'framer-motion' as 'motion/react' seems to be a typo
import { Button } from './ui/button'
import { ArrowDown, Github, Linkedin, Mail, Youtube } from 'lucide-react'

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-24 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center md:text-left md:mr-8"
        >
          <p className="text-emerald-400 text-lg tracking-wider">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl text-white mb-6">Abdalla Mahmoud</h1>

          <div className="text-2xl md:text-4xl text-gray-300 mb-8">
            I'm a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              MERN Stack Developer
            </span>{' '}
            specializing in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Modern Web Applications
            </span>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl">
            I build responsive, user-focused applications using React, Node.js,
            Express, and MongoDB. Passionate about clean code, scalability, and
            creating real-world solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-6">
            <Button
              onClick={scrollToProjects}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>

            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: 'https://github.com/abdallaskar' },
                { icon: Linkedin, href: 'https://linkedin.com/in/abdalla-mahmoud' },
                { icon: Youtube, href: 'https://www.youtube.com/@Abdalla_Sakr' },
                {
                  icon: Mail,
                  href:
                    'https://mail.google.com/mail/?view=cm&to=abdallaskar2000@gmail.com&su=Subject&body=Hello',
                },
                {
                  icon: ArrowDown,
                  href:
                    'https://drive.google.com/uc?export=download&id=1JKImPuTzsK6TOG-6htw1UE6cXniLdT2K',
                },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex justify-center md:justify-start p-4 md:p-8"
        >
          <img
            src="/src/assets/pro.JPG"
            alt="Abdalla Mahmoud"
            className="w-80 h-80 border-4 border-emerald-500 shadow-lg object-cover sm:mx-0 blob-shape"
          />
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description:
        'Building scalable applications with React, Node.js, Express, and MongoDB while ensuring clean and maintainable code.'
    },
    {
      icon: Lightbulb,
      title: 'Engineering Background',
      description:
        'Graduated with a B.Sc. in Systems and Computer Engineering, blending analytical thinking with practical software skills.'
    },
    {
      icon: Users,
      title: 'Collaboration & Projects',
      description:
        'Worked with teams on real-world projects during ITI and graduation, including booking systems, task managers, and e-commerce apps.'
    },
    {
      icon: Coffee,
      title: 'Passion & Dedication',
      description:
        'Driven by curiosity and problem-solving — coding late at night, contributing to GitHub, or learning new technologies.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - BIO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-4">
              Passionate MERN Stack Developer with an Engineering Foundation
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Hi, I’m <span className="text-emerald-400 font-semibold">Abdalla Mahmoud</span>,
              a junior full-stack developer specialized in the MERN stack. I hold a
              <span className="text-blue-400 font-semibold"> B.Sc. in Systems and Computer Engineering</span>,
              where I developed strong problem-solving skills and a solid understanding of software fundamentals.
            </p>
            <p className="text-gray-300 leading-relaxed">
              After graduation, I completed the <span className="text-emerald-400">Intensive Training Program (MERN Stack)</span>
              at ITI Mansoura branch. During this journey, I built several real-world projects, including booking platforms,
              task managers, and e-commerce applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Before joining ITI, I completed the <span className="text-emerald-400">Valeo Techie Degree</span> and trained as a <span className="text-emerald-400">Siemens EDA Trainee</span>,
              where I gained hands-on experience in C/Embedded C, hardware–software integration, requirements management, and automotive software testing techniques.
            </p>


            <p className="text-gray-300 leading-relaxed">
              My strength lies in building interactive frontends with <span className="text-emerald-400">React</span> and
              robust backends with <span className="text-emerald-400">Node.js, Express, and MongoDB</span>. I also integrate
              payment systems with <span className="text-blue-400">Stripe</span> and use modern tools like TailwindCSS, Vite,
              and Radix UI.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently, I’m open to work opportunities in Egypt and Europe, eager to join a team where I can contribute,
              grow, and build impactful applications.
            </p>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - FEATURE CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-black/50 border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

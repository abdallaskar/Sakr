'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Daf3a – Career Development Platform',
      description:
        'A full-featured Ed-tech platform connecting students with mentors via 1:1 sessions and workshops. Includes real-time chat, AI-based mentor recommendations, video calls, Stripe payments, admin dashboard, calendar-based booking, and responsive UI.',
      image: '/public/Daf3a.jpg', // <-- replace with real screenshot
      technologies: ['MERN', 'Stripe', 'Socket.io', 'WebRTC', 'TailwindCSS'],
      github: 'https://github.com/abdallaskar/Daf3a',
      live: 'https://daf3a.vercel.app',
      featured: true,
    },
    {
      title: 'SakrRestaurant – Full-Stack Restaurant App',
      description:
        'Developed a responsive restaurant web app using React, TailwindCSS, and JSON Server with authentication(via json- server - auth), cart system, filtering, and a full admin CRUD dashboard.Tech Stack: React, React Router, TailwindCSS, DaisyUI, JSON Server, json - server - auth.',
      image: '/public/Resturnt.jpg',
      technologies: ['React', 'TailwindCSS', 'DaisyUI', 'JSON Server', 'json-server-auth'],
      github: 'https://github.com/abdallaskar/sakrResturnt',
      live: 'https://sakrresturnt.vercel.app',
      featured: true,
    },
    {
      title: 'SocialApp – Social Media Platform',
      description:
        'A modern social media app with JWT auth, post creation/editing, image upload, and secure API routes.',
      image: '/public/SocialApp.jpg',
      technologies: ['React', 'Express', 'MongoDB', 'JWT', 'TailwindCSS'],
      github: 'https://github.com/abdallaskar/SocialApp',
      live: 'https://social-app-gamma-nine.vercel.app',
      featured: false,
    },
    {
      title: 'Manage Projects – Freelance Web App',
      description:
        'Full-stack MERN app to manage projects with Arabic RTL support, JWT auth, admin roles, form management, and export to PDF/Word/Excel.',
      image: '/public/freelancing.jpg',
      technologies: ['MERN', 'ExcelJS', 'Docx', 'Nodemailer'],
      github: 'https://github.com/abdallaskar/MshruFront',
      live: 'https://mshru-qassim.vercel.app',
      featured: false,
    },
    {
      title: 'Drive Easy – Car Rental Platform',
      description: 'A responsive car rental system with authentication and an admin dashboard.',
      image: '/public/DriveCar.jpg',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/abdallaskar/DriveEasy-Cars',
      live: 'https://abdallaskar.github.io/DriveEasy-Cars',
      featured: false,
    },
    {
      title: 'Sakr Portfolio',
      description: 'Responsive personal portfolio showcasing skills, projects, and contact.',
      image: '/public/Portfolio2.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/abdallaskar/Sakr_portfolio',
      live: 'https://abdallaskar.github.io/Sakr_portfolio',
      featured: false,
    },

    {
      title: 'Know Today’s Weather',
      description: 'Weather forecast app with location-based search and responsive UI.',
      image: '/public/weather.jpg',
      technologies: ['React', 'OpenWeather API', 'TailwindCSS'],
      github: 'https://github.com/abdallaskar/Weather_today',
      live: 'https://abdallaskar.github.io/Weather_today',
      featured: false,
    },
    {
      title: 'To-Do Organizer',
      description: 'Task management app with CRUD functionality and clean responsive UI.',
      image: '/public/Todo.jpg',
      technologies: ['React', 'TailwindCSS', 'LocalStorage'],
      github: 'https://github.com/abdallaskar/Todo_list_app',
      live: 'https://abdallaskar.github.io/Todo_list_app',
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/50 border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      target="_blank"
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      target="_blank"
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      target="_blank"
                      href={project.github}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      target="_blank"
                      href={project.live}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/abdallaskar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3"
            >
              View All Projects
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
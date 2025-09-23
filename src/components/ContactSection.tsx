'use client'

import { motion } from 'motion/react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Github, Linkedin, Mail, Twitter, Youtube, Facebook, Phone, MapPin } from 'lucide-react'
import emailjs from 'emailjs-com'
import { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    // Get all input and textarea fields
    const fields = Array.from(formRef.current.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea'))

    // Check if any field is empty
    const emptyField = fields.find(field => !field.value.trim())
    if (emptyField) {
      toast.error('Please fill in all fields before sending.', { position: 'top-center' })
      return
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success('Message sent successfully!', { position: 'top-center' })
          formRef.current?.reset()
        },
        (error) => {
          console.error('EmailJS error:', error)
          toast.error('Failed to send message, please try again.', { position: 'top-center' })
        }
      )
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abdallaskar2000@gmail.com',
      href: 'mailto:abdallaskar2000@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 (010) 902-34964',
      href: 'tel:+201090234964'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cairo, Egypt',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/abdallaskar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdalla-mahmoud-sakr', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/AbdallaSkar', label: 'Twitter' },
    { icon: Youtube, href: 'https://www.youtube.com/@Abdalla_Sakr', label: 'YouTube' },
    { icon: Facebook, href: 'https://www.facebook.com/abdall.saar?locale=ar_AR', label: 'Facebook' },
    {
      icon: Mail,
      href: "https://mail.google.com/mail/?view=cm&to=abdallaskar2000@gmail.com&su=Subject&body=Hello",
      label: 'Email',
      isMail: true // optional flag
    }
  ]

  return (
    <section id="contact" className="py-20 bg-black">
      <Toaster position="top-right" reverseOrder={false} /> {/* Toast container */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can collaborate!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gray-900/50 border-white/10">
              <h3 className="text-2xl text-white mb-6">Send me a message</h3>
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">First Name</label>
                    <Input
                      name="firstName"
                      placeholder="Your first name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm mb-2 block">Last Name</label>
                    <Input
                      name="lastName"
                      placeholder="Your last name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Email</label>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Subject</label>
                  <Input
                    name="subject"
                    placeholder="Project discussion"
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-emerald-500 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Let's connect</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm currently open to freelance projects and full-time roles.
                Whether you want to discuss a collaboration or simply chat about technology,
                I'd love to connect with you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-white/10 hover:border-emerald-500/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/30 transition-all duration-300">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white text-lg mb-4">Follow me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-emerald-500 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

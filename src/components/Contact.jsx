import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/rizwanmoulvi",
    username: "@rizwanmoulvi"
  },
  {
    name: "X (Twitter)",
    icon: Twitter, 
    url: "https://x.com/0xrizzmo",
    username: "@0xrizzmo"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/rizwanmoulvi",
    username: "/in/rizwanmoulvi"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:mrizwanmoulvi@gmail.com",
    username: "mrizwanmoulvi@gmail.com"
  }
]

const SocialLink = ({ social, index }) => {
  const IconComponent = social.icon
  
  return (
    <motion.a
      href={social.url}
      target={social.name !== "Email" ? "_blank" : "_self"}
      rel={social.name !== "Email" ? "noopener noreferrer" : ""}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center justify-between p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-sm bg-white"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-50 group-hover:bg-gray-100 transition-colors rounded-full">
          <IconComponent className="h-6 w-6 text-gray-600" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{social.name}</h3>
          <p className="text-gray-600 text-sm">{social.username}</p>
        </div>
      </div>
      
      <div className="text-gray-400 group-hover:text-black transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </motion.a>
  )
}

const Contact = () => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 max-w-2xl">
          Let's connect and explore opportunities in Web3, blockchain, and innovative technology solutions
        </p>
      </motion.div>
      
      <div className="grid gap-4 max-w-2xl">
        {socialLinks.map((social, index) => (
          <SocialLink key={index} social={social} index={index} />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-gray-500 text-sm">
          © 2024 Rizwan Moulvi. Building the future with decentralized technologies.
        </p>
      </motion.div>
    </section>
  )
}

export default Contact
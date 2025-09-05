import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "Vibe",
    description: "Social engagement and learning games platform powered by Web3 and AI",
    tech: ["Smart Contracts", "Hardhat", "Ethers.js", "Gemini API", "React.js", "Amazon Bedrock", "AWS EC2"],
    github: "https://github.com/rizwanmoulvi/VIBE",
    demo: "https://vibe-games.vercel.app/"
  },
  {
    title: "DataNill",
    description: "Secret data crowd-sourcing platform with MPC",
    tech: ["Smart Contracts", "Hardhat", "Ethers.js", "Nillion MPC", "React", "AWS EC2"],
    github: "https://github.com/rizwanmoulvi/DataNill",
    demo: "https://data-nill.vercel.app/"
  },
  {
    title: "Sui-Cards",
    description: "Virtual crypto payment cards on SUI network",
    tech: ["Move Smart Contracts", "React", "AWS EC2"],
    github: "https://github.com/rizwanmoulvi/Sui-Cards",
    demo: "https://sui-cards.vercel.app/"
  },
  {
    title: "NameSpace",
    description: "A name-service launchpad on Linea",
    tech: ["Linea Network", "Smart Contracts", "HardHat", "React", "Ethers.js"],
    github: "https://github.com/rizwanmoulvi/Name-Space",
    demo: "https://name-space-red.vercel.app/"
  },
  {
    title: "Catch Goofy",
    description: "Fun bird crash game",
    tech: ["Smart Contracts", "HardHat", "React", "Ethers.js", "Privy", "Chainlink VRF", "Smart Wallets"],
    github: "https://github.com/rizwanmoulvi/catch-goofy",
    demo: "https://catch-goofy.vercel.app/"
  },
  {
    title: "SoMany",
    description: "A cross-chain token aggregator",
    tech: ["RainbowKit", "HardHat", "Reactive Network", "Chainlink Oracles", "Smart Contracts", "Next.js"],
    github: "https://github.com/rizwanmoulvi/somany",
    demo: "https://somany-demo.vercel.app/"
  },
  {
    title: "Vector Protocol",
    description: "Synthetic real-world assets on Stellar Blockchain",
    tech: ["Soroban", "Rust", "Stellar", "Web3 Wallets", "AWS EC2", "Asset API", "Oracles"],
    github: "https://github.com/rizwanmoulvi/vector",
    demo: "https://vector-seven.vercel.app/"
  },
  {
    title: "TriAd",
    description: "Decentralized advertisement exchange on Solana",
    tech: ["Rust", "Solana Program", "React", "Phantom Wallet", "AWS EC2"],
    github: "https://github.com/rizwanmoulvi/triad",
    demo: "https://triad-tron.vercel.app/"
  }
]

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 p-8 hover:shadow-sm"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-semibold group-hover:text-gray-600 transition-colors">
          {project.title}
        </h3>
        <div className="flex space-x-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-black transition-colors"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-black transition-colors"
          >
            <ExternalLink size={20} />
          </motion.a>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-600 max-w-2xl">
          A collection of projects focused on blockchain, Web3, and decentralized technologies
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "Solidity", "Rust", "C", "TypeScript", "SQL", "HTML/CSS"]
  },
  {
    title: "Frameworks",
    skills: ["Django", "Express.js", "Spring", "HardHat", "React.js", "Anchor"]
  },
  {
    title: "Technologies",
    skills: ["REST API", "GraphQL", "NoSQL", "GenAI", "Cloud Deployment", "CI/CD", "Computer Networks", "Operating Systems", "Blockchain", "Web3", "Linux", "UI/UX"]
  },
  {
    title: "Tools",
    skills: ["Postman", "Git", "Docker", "TailwindCSS", "Remix", "Chainlink", "RainbowKit", "Grafana", "Prometheus"]
  }
]

const SkillCategory = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        {category.title}
      </h3>
      
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-medium transition-all duration-200 cursor-default border border-gray-200 hover:border-gray-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-gray-600 max-w-2xl">
          Technical expertise across blockchain, web development, and modern software engineering
        </p>
      </motion.div>
      
      <div>
        {skillCategories.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Skills
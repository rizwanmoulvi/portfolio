import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const achievements = [
  {
    position: "1st Place",
    event: "IBC Hackathon",
    link: "https://dorahacks.io/hackathon/ideahackers-guide-to-ibc/winner"
  },
  {
    position: "4th Place", 
    event: "Hackatron S7",
    link: "https://devpost.com/software/vibe-c9ojq7"
  },
  {
    position: "4th Place",
    event: "EduChain Semester 1", 
    link: "https://dorahacks.io/hackathon/educhain/winner"
  },
  {
    position: "2nd Place",
    event: "Somnia Mini Games Hackathon",
    link: "https://dorahacks.io/hackathon/educhain/winner"
  },
  {
    position: "1st Place",
    event: "Hacker House",
    link: "https://devfolio.co/projects/datanill-30e0"
  }
]

const participations = [
  "Aptos Winter School",
  "Stellar Builder Residency", 
  "IBC Incubator"
]

const interests = [
  "Fishing",
  "Travelling", 
  "Bowling",
  "DJ",
  "Product Development",
  "Fashion"
]

const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group flex items-center justify-between p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-sm bg-white"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-50 group-hover:bg-gray-100 transition-colors rounded-full">
          <Award className="h-6 w-6 text-gray-600" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{achievement.position}</h3>
          <p className="text-gray-600">{achievement.event}</p>
        </div>
      </div>
      
      <motion.a
        href={achievement.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-gray-400 hover:text-black transition-colors"
      >
        <ExternalLink size={20} />
      </motion.a>
    </motion.div>
  )
}

const Achievements = () => {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Achievements</h2>
        <p className="text-gray-600 max-w-2xl">
          Recognition and accomplishments in hackathons and competitions
        </p>
      </motion.div>
      
      <div className="grid gap-4 mb-16">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} index={index} />
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Participations</h3>
          <div className="space-y-3">
            {participations.map((participation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg"
              >
                {participation}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Outside Work</h3>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg text-sm font-medium transition-all duration-200 cursor-default border border-gray-200 hover:border-gray-300"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
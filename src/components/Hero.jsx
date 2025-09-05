import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-20 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
      >
        Rizwan
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
      >
        Professional software engineer focused on decentralized technologies, blockchain, and Web3. 
        Sometimes exploring with GenAI. Always looking forward to solving real world problems through 
        digital products and solutions.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-sm text-gray-400 uppercase tracking-wider"
      >
        Also known as Rizz
      </motion.div>
    </motion.section>
  )
}

export default Hero
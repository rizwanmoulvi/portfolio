import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-8 max-w-4xl"
      >
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </motion.main>
    </div>
  )
}

export default App
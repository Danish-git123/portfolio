import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Achievements from './Achievements'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <div className="bg-slate-900 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

import './index.css'

import ParticleCanvas from './components/ParticleCanvas'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import ToolsMarquee from './components/ToolsMarquee'
import ProvenImpact from './components/ProvenImpact'
import Services from './components/Services'
import Experience from './components/Experience'
import Process from './components/Process'
import PhotoShowcase from './components/PhotoShowcase'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Footer from './components/Footer'

import useScrollReveal from './hooks/useScrollReveal'
import useParallax from './hooks/useParallax'
import useCountUp from './hooks/useCountUp'

function PageContent() {
  return (
    <main className="main">
      <Hero />
      <StatsBar />
      <About />
      <ToolsMarquee />
      <ProvenImpact />
      <Services />
      <Experience />
      <Process />
      <PhotoShowcase />
      <Testimonials />
      <Booking />
    </main>
  )
}

export default function App() {
  // Global UI/animation hooks
  useScrollReveal()
  useParallax()
  useCountUp()

  return (
    <div className="app-container">
      {/* Background layer */}
      <ParticleCanvas />

      {/* Navigation */}
      <NavBar />

      {/* Page sections */}
      <PageContent />

      {/* Footer */}
      <Footer />
    </div>
  )
}
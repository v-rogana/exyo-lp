import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NeonConnector from './components/NeonConnector'
import TheProblem from './components/TheProblem'
import UniversityDiagnosis from './components/UniversityDiagnosis'
import SuccessCases from './components/SuccessCases'
import Proposal from './components/Proposal'
import Pillars from './components/Pillars'
import Efficacy from './components/Efficacy'
import FormSection from './components/FormSection'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // ===== GLOBAL REVEAL OBSERVER (same approach as reference HTML) =====
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // Check if element should have dim opacity
            if (e.target.dataset.revealDim) {
              e.target.classList.add('vis-dim')
            } else {
              e.target.classList.add('vis')
            }
            // Animate rings inside
            e.target.querySelectorAll('.rk-fill').forEach((r) => {
              setTimeout(() => r.classList.add('go'), 200)
            })
            revealObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
    )

    // Observe all reveal elements
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      revealObs.observe(el)
    })

    // ===== PARALLAX ORBS =====
    const handleScroll = () => {
      const y = window.scrollY
      document.querySelectorAll('.orb').forEach((o, i) => {
        o.style.transform = `translateY(${y * (0.02 + i * 0.008)}px)`
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      revealObs.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Navbar />
      <Hero />
      <NeonConnector />
      <TheProblem />
      <NeonConnector variant="wide" />
      <UniversityDiagnosis />
      <NeonConnector />
      <SuccessCases />
      <NeonConnector variant="wide" />
      <Proposal />
      <NeonConnector />
      <Pillars />
      <NeonConnector variant="wide" />
      <Efficacy />
      <NeonConnector />
      <FormSection />
      <Footer />
    </div>
  )
}

export default App

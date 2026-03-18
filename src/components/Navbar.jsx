import { useState, useEffect } from 'react'
import logoExyo from '../assets/images/logo-exyo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-3 sm:py-4'
      }`}
      style={{
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'rgba(10,10,10,0.6)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(112,206,211,0.08)' : 'rgba(255,255,255,0.03)'}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <img
            src={logoExyo}
            alt="Exyo"
            className={`transition-all duration-500 ${scrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14'}`}
          />
        </a>

        {/* Desktop CTA */}
        <a
          href="#form-section"
          className="cta-btn hidden md:inline-flex"
          style={{ padding: '11px 28px', fontSize: '0.85rem' }}
        >
          Agendar Reunião
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(10,10,10,0.98)' }}
      >
        <div className="px-5 py-6 border-t border-[rgba(112,206,211,0.08)]">
          <a
            href="#form-section"
            onClick={() => setMenuOpen(false)}
            className="cta-btn block text-center w-full"
            style={{ padding: '14px 26px', fontSize: '0.9rem' }}
          >
            Agendar Reunião
          </a>
        </div>
      </div>
    </nav>
  )
}

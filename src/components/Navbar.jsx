import { useState, useEffect } from 'react'
import { navLinks, authorInfo } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      const sections = navLinks.map(link => link.href.replace('#', ''))
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      setIsMobileMenuOpen(false)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#1A1A1A]/98 backdrop-blur-sm border-b-2 border-[#E85D2C]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              {/* Industrial gear icon */}
              <svg className="w-8 h-8 text-[#E85D2C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a2 2 0 012 2c0 .74-.4 1.38-1 1.72V7h3V5.72A2 2 0 0117 4a2 2 0 012 2 2 2 0 01-1 1.72V11h3v1h-3v3h3v1h-3v3.28a2 2 0 011 1.72 2 2 0 01-2 2 2 2 0 01-1.72-1H14a2 2 0 01-1.72 1A2 2 0 0110 21a2 2 0 011-1.72V16H8v3.28A2 2 0 017 21a2 2 0 01-2-2 2 2 0 011-1.72V14H3v-1h3v-3H3v-1h3V5.72A2 2 0 015 4a2 2 0 012-2 2 2 0 011.72 1H10a2 2 0 011.72-1A2 2 0 0112 2z"/>
              </svg>
            </div>
            <span className={`font-oswald text-lg font-bold uppercase tracking-wider transition-colors ${
              isScrolled ? 'text-[#F5F0EB]' : 'text-[#1A1A1A]'
            }`}>
              {authorInfo.name}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-oswald font-medium uppercase tracking-[0.1em] transition-all border-b-2 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#E85D2C] border-[#E85D2C]'
                    : isScrolled
                      ? 'text-[#999] border-transparent hover:text-[#F5F0EB] hover:border-[#444]'
                      : 'text-[#E85D2C] border-transparent hover:text-[#1A1A1A] hover:border-[#CCC]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-4 px-6 py-2.5 bg-[#E85D2C] text-white font-oswald font-bold text-sm uppercase tracking-[0.1em] hover:bg-[#cc4a1f] transition-all"
            >
              Get the Book
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-[#F5F0EB]' : 'text-[#1A1A1A]'}`}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-[#1A1A1A] border-2 border-[#E85D2C] mt-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-3 font-oswald font-medium uppercase tracking-[0.1em] transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-[#E85D2C] border-l-4 border-[#E85D2C] pl-3'
                    : 'text-[#999] hover:text-[#F5F0EB]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block mt-3 px-4 py-3 bg-[#E85D2C] text-white text-center font-oswald font-bold uppercase tracking-[0.1em] hover:bg-[#cc4a1f] transition-colors"
            >
              Get the Book
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
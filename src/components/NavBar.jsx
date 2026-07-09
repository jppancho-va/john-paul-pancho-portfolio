import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

export default function NavBar() {
  // Pure React states replacing your old classList mutations
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  // Clean, reactive window scroll tracker
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (section) => {
    setIsMenuOpen(false) // Automatically collapses mobile menu when navigating
    
    if (location.pathname !== '/') {
      navigate(`/#${section}`)
    } else {
      document.getElementById(section)?.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLink = (section, label) => (
    <a
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault()
        handleNav(section)
      }}
    >
      {label}
    </a>
  )

  return (
    /* Matches your existing CSS scroll class trigger (.nav-master-container.on) */
    <nav id="nav" className={`nav-master-container ${isScrolled ? 'on' : ''}`}>
      <div className="nav-in">

        <a
          href="#hero"
          className="logo-brand"
          onClick={(e) => {
            e.preventDefault()
            handleNav('hero')
          }}
        >
          JP <span className="gold-pipe">|</span> VA
        </a>

        {/* Desktop Links Menu */}
        <ul className="nlinks">
          <li>{navLink('about', 'About')}</li>
          <li>{navLink('services', 'Services')}</li>
          <li>{navLink('experience', 'Experience')}</li>
          <li>{navLink('testimonials', 'Testimonials')}</li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>

        <a
          href="#book"
          className="ncta"
          onClick={(e) => {
            e.preventDefault()
            handleNav('book')
          }}
        >
          Book Interview →
        </a>

        {/* Hamburger Menu Toggle - Matches your existing CSS (.brgr.open) */}
        <button 
          className={`brgr ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      {/* Mobile Links Overlay Menu - Matches your existing CSS (.mmenu.open) */}
      <div className={`mmenu ${isMenuOpen ? 'open' : ''}`}>
        {navLink('about', 'About')}
        {navLink('services', 'Services')}
        {navLink('experience', 'Experience')}
        {navLink('testimonials', 'Testimonials')}
        
        {/* Explicitly closes the side panel when routing away to the articles layout */}
        <Link to="/articles" onClick={closeMenu}>Articles</Link>

        <a
          href="#book"
          className="btn-y"
          onClick={(e) => {
            e.preventDefault()
            handleNav('book')
          }}
        >
          Book Interview →
        </a>
      </div>
    </nav>
  )
}
import { useEffect, useRef } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'

export default function NavBar() {
  const navRef = useRef(null)
  const brgrRef = useRef(null)
  const mmRef = useRef(null)

  const location = useLocation()
  const navigate = useNavigate()

  const handleNav = (section) => {
    if (location.pathname !== '/') {
      navigate(`/#${section}`)
    } else {
      document.getElementById(section)?.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const nav = navRef.current
    const brgr = brgrRef.current
    const mm = mmRef.current

    if (!nav || !brgr || !mm) return

    const onScroll = () => {
      nav.classList.toggle('on', window.scrollY > 40)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    const toggleMenu = () => {
      brgr.classList.toggle('open')
      mm.classList.toggle('open')
    }

    const closeMenu = () => {
      brgr.classList.remove('open')
      mm.classList.remove('open')
    }

    brgr.addEventListener('click', toggleMenu)

    const links = mm.querySelectorAll('a')
    links.forEach(a => a.addEventListener('click', closeMenu))

    return () => {
      window.removeEventListener('scroll', onScroll)
      brgr.removeEventListener('click', toggleMenu)
      links.forEach(a => a.removeEventListener('click', closeMenu))
    }
  }, [])

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
    <nav id="nav" className="nav-master-container" ref={navRef}>
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
          {/* New Page-Based Route Link */}
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

        <button className="brgr" ref={brgrRef} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>

      </div>

      {/* Mobile Links Overlay Menu */}
      <div className="mmenu" ref={mmRef}>
        {navLink('about', 'About')}
        {navLink('services', 'Services')}
        {navLink('experience', 'Experience')}
        {navLink('testimonials', 'Testimonials')}
        {/* New Mobile Link Element */}
        <Link to="/articles">Articles</Link>

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
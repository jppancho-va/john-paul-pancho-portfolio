import { useEffect, useRef } from 'react'

export default function NavBar() {
  const navRef = useRef(null)
  const brgrRef = useRef(null)
  const mmRef = useRef(null)

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

  return (
    <nav id="nav" className="nav-master-container" ref={navRef}>
      <div className="nav-in">
        <a href="#hero" className="logo-brand">
          JP <span className="gold-pipe">|</span> VA
        </a>

        <ul className="nlinks">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>

        <a href="#book" className="ncta">
          Book Interview →
        </a>

        <button className="brgr" ref={brgrRef} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className="mmenu" ref={mmRef}>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#experience">Experience</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#book" className="btn-y">
          Book Interview →
        </a>
      </div>
    </nav>
  )
}
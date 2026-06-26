import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/Logo.png'

const navLinks = [
  { name: 'Home',     href: '#hero' },
  { name: 'About',    href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Hajj',     href: '#hajj' },
  { name: 'Umrah',    href: '#umrah' },
  { name: 'Past Work',href: '#gallery' },
  { name: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  /* ── scroll‑shrink effect ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ── active section tracker via IntersectionObserver ── */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))

    const observers = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        {
          rootMargin: '-40% 0px -55% 0px', // fires when section is ~centered in viewport
          threshold: 0,
        }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const defaultMsg =
    'Assalamu Alaikum Warahmatullahi Wabarakatuh. I would like to inquire about Al-Maccam Hajj & Umrah travels and packages. Please guide me with details.'
  const whatsappUrl = `https://wa.me/94717666084?text=${encodeURIComponent(defaultMsg)}`

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* ── Main bar ── */}
      <div
        className="mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 ease-out hover:scale-[1.01]"
        style={{
          width:           scrolled ? '92%'  : '100%',
          maxWidth:        scrolled ? '1100px' : '100%',
          borderRadius:    scrolled ? '36px 12px 36px 12px' : '0px',
          marginTop:       scrolled ? '16px' : '0px',
          paddingTop:      scrolled ? '10px' : '16px',
          paddingBottom:   scrolled ? '10px' : '16px',
          paddingLeft:     scrolled ? '28px' : '32px',
          paddingRight:    scrolled ? '28px' : '32px',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : '#ffffff',
          boxShadow:       scrolled
            ? '0 20px 30px -10px rgba(10,61,59,0.15), 0 1px 3px rgba(212,175,55,0.2)'
            : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,175,55,0.4)' : '1px solid #f3f4f6',
          borderLeft:   scrolled ? '1px solid rgba(212,175,55,0.4)' : 'none',
          borderRight:  scrolled ? '1px solid rgba(212,175,55,0.4)' : 'none',
          borderTop:    scrolled ? '1px solid rgba(212,175,55,0.4)' : 'none',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); go('#hero') }}
          className="flex items-center overflow-hidden"
        >
          <img
            src={logo}
            alt="Al-Maccam"
            className="transition-all duration-500 object-contain"
            style={{ height: scrolled ? '42px' : '64px', clipPath: 'inset(4px 4px 4px 4px)' }}
          />
        </a>

        {/* ── Desktop Links ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const id      = link.href.replace('#', '')
            const isActive = activeId === id
            return (
              <button
                key={link.name}
                onClick={() => go(link.href)}
                className="relative px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-full hover:bg-primary/5 group"
                style={{ color: isActive ? '#012B28' : '#003A36' }}
              >
                {link.name}

                {/* Green underline */}
                <span
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full transition-all duration-300"
                  style={{
                    width:           isActive ? 'calc(100% - 20px)' : '0%',
                    backgroundColor: '#1D8A84',   /* accent / green */
                    opacity:         isActive ? 1 : 0,
                  }}
                />
              </button>
            )
          })}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center gap-1.5 bg-gold text-secondary px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gold/90 transition-all duration-300 shadow-md shadow-gold/10 hover:shadow-lg hover:scale-105"
          >
            <Phone size={14} />
            WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full text-secondary hover:bg-gray-100 transition-all"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="mx-auto w-[92%] mt-2 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl overflow-hidden md:hidden pointer-events-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const id      = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <button
                  key={link.name}
                  onClick={() => go(link.href)}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    color:           isActive ? '#012B28' : '#003A36',
                    backgroundColor: isActive ? 'rgba(29,138,132,0.08)' : 'transparent',
                  }}
                >
                  {/* green left bar */}
                  <span
                    className="w-1 rounded-full flex-shrink-0 transition-all duration-300"
                    style={{
                      height:          isActive ? '18px' : '0px',
                      backgroundColor: '#1D8A84',
                    }}
                  />
                  {link.name}
                </button>
              )
            })}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gold text-secondary px-4 py-3 rounded-xl text-sm font-bold mt-3 shadow-md"
            >
              <Phone size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

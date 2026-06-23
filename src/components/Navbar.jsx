import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../assets/Logo.png'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Hajj', href: '#hajj' },
  { name: 'Umrah', href: '#umrah' },
  { name: 'Past Work', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const go = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const defaultMsg = 'Assalamu Alaikum Warahmatullahi Wabarakatuh. I would like to inquire about Al-Maccam Hajj & Umrah travels and packages. Please guide me with details.'
  const whatsappUrl = `https://wa.me/94717666084?text=${encodeURIComponent(defaultMsg)}`

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      {/* Liquid Inner Wrapper with smooth inline styles transition */}
      <div
        className="mx-auto flex items-center justify-between pointer-events-auto transition-all duration-500 ease-out hover:scale-[1.01]"
        style={{
          width: scrolled ? '92%' : '100%',
          maxWidth: scrolled ? '1100px' : '100%',
          borderRadius: scrolled ? '36px 12px 36px 12px' : '0px',
          marginTop: scrolled ? '16px' : '0px',
          paddingTop: scrolled ? '10px' : '16px',
          paddingBottom: scrolled ? '10px' : '16px',
          paddingLeft: scrolled ? '28px' : '32px',
          paddingRight: scrolled ? '28px' : '32px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.92)' : '#ffffff',
          boxShadow: scrolled ? '0 20px 30px -10px rgba(10, 61, 59, 0.15), 0 1px 3px rgba(212, 175, 55, 0.2)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.4)' : '1px solid #f3f4f6',
          borderLeft: scrolled ? '1px solid rgba(212, 175, 55, 0.4)' : 'none',
          borderRight: scrolled ? '1px solid rgba(212, 175, 55, 0.4)' : 'none',
          borderTop: scrolled ? '1px solid rgba(212, 175, 55, 0.4)' : 'none',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        {/* Logo left corner (enlarged with clip-path to crop out borders) */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); go('#hero') }} className="flex items-center overflow-hidden">
          <img
            src={logo}
            alt="Al-Maccam"
            className="transition-all duration-500 object-contain"
            style={{
              height: scrolled ? '42px' : '64px',
              clipPath: 'inset(4px 4px 4px 4px)',
            }}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => go(link.href)}
              className="px-4 py-2 text-sm font-semibold text-secondary hover:text-primary transition-colors rounded-full hover:bg-primary/5"
            >
              {link.name}
            </button>
          ))}
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

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full text-secondary hover:bg-gray-100 transition-all"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Links */}
      {open && (
        <div className="mx-auto w-[92%] mt-2 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl overflow-hidden md:hidden pointer-events-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => go(link.href)}
                className="block w-full text-left px-4 py-3 text-secondary hover:text-primary hover:bg-primary/5 rounded-xl text-sm font-medium transition-all"
              >
                {link.name}
              </button>
            ))}
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

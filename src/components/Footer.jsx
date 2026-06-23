import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from '../assets/Logo.png'
import ScrollReveal from './ScrollReveal'

const links = [
  { name: 'Home', id: '#hero' },
  { name: 'About', id: '#about' },
  { name: 'Services', id: '#services' },
  { name: 'Hajj Packages', id: '#hajj' },
  { name: 'Umrah Packages', id: '#umrah' },
  { name: 'Past Work', id: '#gallery' },
  { name: 'Contact Us', id: '#contact' },
]

export default function Footer() {
  const go = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-[#012B28] text-white overflow-hidden border-t border-gold/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo Section */}
          <div className="space-y-6">
            <img
              src={logo}
              alt="Al-Maccam"
              className="h-16 brightness-0 invert"
              style={{ clipPath: 'inset(4px 4px 4px 4px)' }}
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Your trusted partner for Hajj and Umrah pilgrimage services since 2010. Guiding your spiritual journey with premium care and expert coordination.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/people/Al-Maccam-Travels/61583131390096/?rdid=Q0GnP8DMd3FHlaii&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17kTvyakac%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-secondary rounded-full flex items-center justify-center transition-all duration-300 border border-white/10"
                title="Facebook"
              >
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/almaccamtravels/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-secondary rounded-full flex items-center justify-center transition-all duration-300 border border-white/10"
                title="Instagram"
              >
                <svg className="w-[18px] h-[18px] stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@almaccamtravelsandtours"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-gold hover:text-secondary rounded-full flex items-center justify-center transition-all duration-300 border border-white/10"
                title="TikTok"
              >
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a72.81,72.81,0,1,0,50.23,69.63V0h89.78a117.84,117.84,0,0,0,13.62,54.13,115.89,115.89,0,0,0,53.4,47.16c3.14.77,6.36,1.48,9.58,2.15v106.5Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold text-base font-heading font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => go(link.id)}
                    className="text-white/60 hover:text-gold text-sm transition-colors text-left font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address & Email */}
          <div>
            <h4 className="text-gold text-base font-heading font-bold uppercase tracking-wider mb-6">
              Head Office
            </h4>
            <div className="space-y-4 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  No.15/ Main Street,<br />
                  Madurankuliya, Puttalam,<br />
                  Sri Lanka.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:thowfeena@gmail.com" className="hover:text-gold transition-colors">
                  thowfeena@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-gold text-base font-heading font-bold uppercase tracking-wider mb-6">
              Contact & Support
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-white font-bold text-xs uppercase tracking-wide">
                    Al Haj MPS. Thowfeena
                  </p>
                  <a href="tel:+94717666084" className="text-gold hover:underline text-xs block mt-0.5">
                    071 766 6084
                  </a>
                  <a href="tel:+94775303062" className="text-gold hover:underline text-xs block">
                    077 530 3062
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-white font-bold text-xs uppercase tracking-wide">
                    Al Haj N.M. Faizar
                  </p>
                  <a href="tel:+94764838181" className="text-gold hover:underline text-xs block mt-0.5">
                    076 483 8181
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-white font-bold text-xs uppercase tracking-wide">
                    Al Haj Basheer (Madani)
                  </p>
                  <a href="tel:+94742674388" className="text-gold hover:underline text-xs block mt-0.5">
                    074 267 4388
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </ScrollReveal>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Al-Maccam Travels & Tours (Pvt) Ltd. All rights reserved.
          </p>
          <motion.button
            onClick={scrollTop}
            className="w-10 h-10 bg-white/10 hover:bg-gold hover:text-secondary rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

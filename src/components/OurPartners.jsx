import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

// Import all partner logos
import airArabia from '../assets/partners/Air Arabia.png'
import emirates from '../assets/partners/Emirates.png'
import etihad from '../assets/partners/Etihad Airways.png'
import gulfAir from '../assets/partners/Gulf Air.png'
import jazeeraAirways from '../assets/partners/Jazeera Airways.png'
import kuwaitAirways from '../assets/partners/Kuwait airways.png'
import omanAir from '../assets/partners/Oman Air.png'
import qatarAirways from '../assets/partners/Qatar Airways.png'
import saudi from '../assets/partners/Saudi.png'

const partners = [
  { name: 'Emirates', logo: emirates },
  { name: 'Qatar Airways', logo: qatarAirways },
  { name: 'Saudi Airlines', logo: saudi },
  { name: 'Etihad Airways', logo: etihad },
  { name: 'Kuwait Airways', logo: kuwaitAirways },
  { name: 'Gulf Air', logo: gulfAir },
  { name: 'Oman Air', logo: omanAir },
  { name: 'Air Arabia', logo: airArabia },
  { name: 'Jazeera Airways', logo: jazeeraAirways },
]

// Duplicate for seamless infinite scroll
const allPartners = [...partners, ...partners]

export default function OurPartners() {
  return (
    <section id="partners" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">
              Airline Partners
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-secondary">
            Our Trusted <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We collaborate with the world's leading airlines to bring you the best flight connections,
            comfort, and value for your sacred pilgrimage journey.
          </p>
        </ScrollReveal>

        {/* Marquee track */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              duration: 28,
              ease: 'linear',
            }}
          >
            {allPartners.map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-44 h-24 bg-[#FAF9F6] border border-gray-100 rounded-2xl flex items-center justify-center px-5 py-4
                           shadow-sm hover:shadow-md hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 cursor-default group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 max-w-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-400"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Partner count badge */}
        <ScrollReveal className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/10 rounded-full px-6 py-3">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-secondary text-sm font-semibold">
              Partnered with <span className="text-primary font-extrabold">9+</span> International Airlines for Your Journey
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

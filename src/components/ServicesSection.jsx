import { motion } from 'framer-motion'
import {
  Compass, MapPin, FileText, Plane,
  Building2, Bus, Users, GraduationCap,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const services = [
  { icon: Compass, title: 'Hajj Packages', desc: 'Meticulously planned Hajj itineraries with full logistical and scholarly support.' },
  { icon: MapPin, title: 'Umrah Packages', desc: 'Bespoke and group packages designed to accommodate various budgets year-round.' },
  { icon: FileText, title: 'Visa Processing', desc: 'Expedited Saudi visa issuance, biometrics, and verification services.' },
  { icon: Plane, title: 'Flight Reservations', desc: 'Convenient airline itineraries at best rates with premium carrier options.' },
  { icon: Building2, title: 'Haram Hotels', desc: 'Premium hotels and suites situated in immediate proximity to the Haram.' },
  { icon: Bus, title: 'Luxury Transfers', desc: 'Air-conditioned modern coaches for all local and inter-city commutes.' },
  { icon: Users, title: 'Family & Groups', desc: 'Specially structured itineraries catering to family needs and senior citizens.' },
  { icon: GraduationCap, title: 'Pre-Travel Training', desc: 'Interactive seminars and guides explaining the sacred rites of Hajj & Umrah.' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title Block */}
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">Our Service Range</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-secondary">
            Premium <span className="text-gradient">End-to-End</span> Pilgrimage Support
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Allow us to manage the logistics of your pilgrimage so you can focus entirely on your spiritual devotion and prayers.
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="group bg-[#FAF9F6] border border-gray-100 rounded-3xl p-6 hover:border-gold/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 cursor-default"
            >
              <div
                className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm"
              >
                <s.icon
                  size={20}
                  className="text-primary group-hover:text-white transition-colors duration-500"
                />
              </div>
              <h3 className="font-heading font-bold text-secondary text-base mb-2 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

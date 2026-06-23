import { motion } from 'framer-motion'
import { Phone, CheckCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

import imgMasjidAlHaram from '../assets/Place/Masjid Al Haram.webp'
import imgArafat from '../assets/Place/Arafat.jpg'
import imgMina from '../assets/Place/Mina.webp'
import imgJabalAlNoor from '../assets/Place/Jabal Al Noor.webp'

const packages = [
  {
    name: 'Economy Package',
    tag: 'Essential Hajj services maintaining high dignity and comfort.',
    features: ['Shared Room Accommodation', 'Economy Airfare Included', 'Buffet Meals (Sri Lankan/Arab)', 'Group Lectures & Guides'],
    image: imgMasjidAlHaram,
  },
  {
    name: 'Standard Package',
    tag: 'Perfect balance of proximity, service, and travel value.',
    features: ['Semi-Private Rooms', 'Economy Class Airfare', 'Half-Board Buffet Catering', 'Guided Mina & Arafat Tours'],
    image: imgArafat,
    popular: true,
  },
  {
    name: 'Premium Package',
    tag: 'Superior comfort steps away from the Haram gates.',
    features: ['Triple/Double Rooms', 'Premium Direct Flights', 'Full-Board Gourmet Catering', 'Dedicated Religious Scholars'],
    image: imgMina,
  },
  {
    name: 'VIP Executive',
    tag: 'The ultimate spiritual trip with elite concierge treatment.',
    features: ['5-Star Luxury Suites', 'First-Class Airfare', 'Premium Open Dining', 'Personal Helper & Private Vehicle'],
    image: imgJabalAlNoor,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
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

export default function HajjPackages() {
  return (
    <section id="hajj" className="relative py-24 sm:py-32 bg-[#FAF9F6] overflow-hidden">
      <div className="absolute inset-0 islamic-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-gold text-xs sm:text-sm font-bold tracking-widest uppercase">Hajj Pilgrimage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-secondary mb-4">
            Exclusive <span className="text-gradient">Hajj Packages</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Choose from our carefully structured packages designed to make your journey comfortable and spiritually fulfilling.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className={`group bg-white rounded-3xl overflow-hidden border ${
                pkg.popular ? 'border-gold/60 shadow-xl' : 'border-gray-100 shadow-md'
              } hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between`}
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                  {pkg.popular && (
                    <span className="absolute top-4 right-4 bg-gold text-secondary text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-md tracking-wider uppercase">
                      Best Value
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-heading font-extrabold text-xl">{pkg.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{pkg.tag}</p>
                  <div className="space-y-2.5 pt-2 border-t border-gray-100">
                    {pkg.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-tight">
                        <CheckCircle size={15} className="text-gold mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <a
                  href={`https://wa.me/94717666084?text=${encodeURIComponent('Assalamu Alaikum Warahmatullahi Wabarakatuh! I am interested in your Hajj package: ' + pkg.name + '. Please guide me with details.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    pkg.popular
                      ? 'bg-gold text-secondary hover:bg-gold/90 shadow-lg shadow-gold/25'
                      : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  <Phone size={14} />
                  Inquire via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, X } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

import imgMakkah from '../assets/Place/Makkah Al-Mukarramah.webp'
import imgMasjidAlHaram from '../assets/Place/Masjid Al Haram.webp'
import imgArafat from '../assets/Place/Arafat.jpg'
import imgMina from '../assets/Place/Mina.webp'
import imgJabalAlNoor from '../assets/Place/Jabal Al Noor.webp'

const destinations = [
  {
    name: 'Makkah Al-Mukarramah',
    desc: 'Home to the Masjid Al Haram and the sacred Kaaba — the most visited place on earth.',
    image: imgMakkah,
  },
  {
    name: 'Masjid Al Haram',
    desc: 'The Grand Mosque surrounding the Kaaba where millions of pilgrims perform Tawaf every year.',
    image: imgMasjidAlHaram,
  },
  {
    name: 'Madinah Al-Munawwarah',
    desc: 'City of the Prophet ﷺ, home to Masjid Nabawi and the resting place of the beloved Messenger.',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80',
  },
  {
    name: 'Arafat',
    desc: 'The vast plain where pilgrims gather on the 9th of Dhul Hijjah — the essential pillar of Hajj.',
    image: imgArafat,
  },
  {
    name: 'Mina',
    desc: 'The city of tents near Makkah where pilgrims reside during the sacred days of Tashreeq in Hajj.',
    image: imgMina,
  },
  {
    name: 'Jabal Al Noor',
    desc: 'The mountain of light containing the Cave of Hira where the first revelation descended upon our Prophet ﷺ.',
    image: imgJabalAlNoor,
  },
]

export default function SacredDestinations() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">Sacred Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-secondary">
            Explore <span className="text-gradient">Sacred Destinations</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Visit the holiest sites of Islam under the guidance of our experienced scholars and group leaders.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.button
                onClick={() => setSelected(d)}
                className="group relative h-56 sm:h-64 rounded-3xl overflow-hidden text-left w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <MapPin size={14} className="text-gold" />
                    <h3 className="text-white font-heading font-bold text-base sm:text-lg">{d.name}</h3>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm leading-snug">{d.desc}</p>
                </div>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                <motion.button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-9 h-9 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={16} className="text-white" />
                </motion.button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-gold" />
                  <h3 className="font-heading font-extrabold text-secondary text-xl">{selected.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{selected.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const images = [
  'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=150&q=80',
  'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=150&q=80',
  'https://images.unsplash.com/photo-1590766940554-634f682b4029?w=150&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=150&q=80',
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=150&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=150&q=80',
  'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=150&q=80',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=150&q=80',
]

const testimonials = [
  { name: 'Mohamed Rizwan', location: 'Colombo', review: 'Al-Maccam made our Hajj journey truly unforgettable. Excellent accommodation near Haram and impeccable guidance. Jazakallah Khair!' },
  { name: 'Fathima Nusrath', location: 'Kandy', review: 'Performed Umrah during Ramadan - the most spiritual experience of my life. Everything was perfectly organized from visa to hotel.' },
  { name: 'Ahamed Ismail', location: 'Jaffna', review: 'Exceptional service throughout our family Umrah trip. Our children were well cared for and we could focus entirely on ibadah.' },
  { name: 'Sithy Ayesha', location: 'Batticaloa', review: 'From visa processing to accommodation, everything was seamless. The team guided us at every step. Highly recommended for Hajj.' },
  { name: 'Mohammed Naleem', location: 'Kurunegala', review: 'Our second Umrah with Al-Maccam and they exceeded expectations again. The hotel locations near Haram were perfect.' },
  { name: 'Rifka Junaid', location: 'Galle', review: 'As first-time pilgrims we were nervous, but the Al-Maccam team made us feel completely at ease. Every detail was handled with care.' },
  { name: 'Isham Fawzy', location: 'Trincomalee', review: 'The group package was excellent value. Great coordination, comfortable transport, and the guide was very knowledgeable.' },
  { name: 'Amina Shafreen', location: 'Colombo', review: 'Ramadan Umrah with Al-Maccam was a dream come true. Iftar arrangements and late-night prayers support were outstanding.' },
  { name: 'Zubair Razeen', location: 'Kattankudy', review: 'VIP Hajj package was worth every penny. Personal concierge, luxury suite near Haram — an unforgettable spiritual experience.' },
]

export default function Testimonials() {
  const [cur, setCur] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCur((p) => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setCur((p) => (p - 1 + testimonials.length) % testimonials.length)
  const next = () => setCur((p) => (p + 1) % testimonials.length)

  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-light to-white">
      <div className="absolute inset-0 islamic-pattern opacity-15" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/[0.06] rounded-full px-4 py-1.5 mb-5 border border-gold/10">
            <div className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider">TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary">
            What Our <span className="text-gradient">Pilgrims Say</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="bg-white rounded-2xl p-6 sm:p-10 text-center relative
            border border-gray-100 shadow-sm"
          >
            <div className="flex justify-center gap-0.5 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-gold fill-gold" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={cur}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-gray-600 italic text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 px-2 sm:px-8">
                  &ldquo;{testimonials[cur].review}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={images[cur]}
                    alt={testimonials[cur].name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-gold/30 shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="font-heading font-bold text-primary text-base sm:text-lg">
                      {testimonials[cur].name}
                    </h4>
                    <p className="text-gold text-xs sm:text-sm font-medium">
                      {testimonials[cur].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8">
              <motion.button
                onClick={prev}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200
                  flex items-center justify-center hover:border-gold hover:text-gold
                  transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={16} />
              </motion.button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCur(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === cur ? 'bg-gold w-6' : 'bg-gray-200 w-2'
                    }`}
                  />
                ))}
              </div>
              <motion.button
                onClick={next}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-200
                  flex items-center justify-center hover:border-gold hover:text-gold
                  transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={16} />
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

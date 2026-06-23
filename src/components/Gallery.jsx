import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

// Import all 12 past work images
import img1 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.28.17.jpeg'
import img2 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.28.18 (1).jpeg'
import img3 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.28.18.jpeg'
import img4 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.28.19.jpeg'
import img5 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.28.20.jpeg'
import img6 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.31.41.jpeg'
import img7 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.31.42 (1).jpeg'
import img8 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.31.42 (2).jpeg'
import img9 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.31.42.jpeg'
import img10 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.31.43 (1).jpeg'
import img11 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.31.43.jpeg'
import img12 from '../assets/Past work/WhatsApp Image 2026-06-23 at 12.31.44.jpeg'

const categories = ['All', 'Groups', 'Guidance', 'Travel']

const items = [
  { id: 1, category: 'Groups', title: '2026 Hajj Group Departure', image: img1 },
  { id: 2, category: 'Guidance', title: 'Scholarly Guidance Session', image: img2 },
  { id: 3, category: 'Travel', title: 'Jeddah Airport Welcome Reception', image: img3 },
  { id: 4, category: 'Guidance', title: 'Pre-departure Seminar Sri Lanka', image: img4 },
  { id: 5, category: 'Groups', title: 'Pilgrim Group in Madinah', image: img5 },
  { id: 6, category: 'Travel', title: 'Luxury Coach Transfers', image: img6 },
  { id: 7, category: 'Guidance', title: 'Mina Tents Orientation', image: img7 },
  { id: 8, category: 'Groups', title: 'Umrah Pilgrims at Haram Entrance', image: img8 },
  { id: 9, category: 'Travel', title: 'Hotel Reception Check-in Makkah', image: img9 },
  { id: 10, category: 'Guidance', title: 'Tawaf Ritual Walkthrough', image: img10 },
  { id: 11, category: 'Groups', title: 'Ziyarah Tour at Mount Uhud', image: img11 },
  { id: 12, category: 'Travel', title: 'Al-Maccam Executive Escort', image: img12 },
]

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [idx, setIdx] = useState(null)
  const filtered = cat === 'All' ? items : items.filter((i) => i.category === cat)

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">Our Past Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-secondary">
            Pilgrimage <span className="text-gradient">Gallery & Records</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Browse photographs from our recent Hajj and Umrah groups, demonstrating our premium services, briefings, and group travels.
          </p>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                cat === c
                  ? 'bg-gold text-secondary shadow-lg shadow-gold/20'
                  : 'bg-white text-secondary border border-gray-100 hover:border-gold hover:text-gold shadow-sm'
              }`}
            >
              {c}
            </button>
          ))}
        </ScrollReveal>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <ScrollReveal
              key={item.id}
              delay={i * 0.05}
              className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setIdx(i)}
                    className="p-3 bg-white text-secondary rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <ZoomIn size={20} />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <span className="text-gold text-xs font-bold tracking-wider uppercase mb-1 block">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-secondary text-sm sm:text-base leading-tight">
                  {item.title}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Slider Modal */}
      {idx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setIdx(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img
                src={filtered[idx]?.image}
                alt={filtered[idx]?.title}
                className="w-full max-h-[70vh] object-contain bg-black"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 text-white">
                <p className="text-gold text-xs font-bold tracking-widest uppercase mb-1">
                  {filtered[idx]?.category}
                </p>
                <p className="font-heading font-bold text-lg sm:text-xl">{filtered[idx]?.title}</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIdx(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
            >
              <X size={24} />
            </button>

            {/* Nav Arrows */}
            <button
              onClick={() => setIdx((p) => (p === 0 ? filtered.length - 1 : p - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-secondary rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => setIdx((p) => (p === filtered.length - 1 ? 0 : p + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-secondary rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

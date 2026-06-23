import { motion } from 'framer-motion'
import { Moon, Users, Building2, Crown, Calendar, Phone, CheckCircle } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

import imgFamily from '../assets/Place/Family Custom Packages.png'
import imgGroup from '../assets/Place/Group Pilgrimage Packages.jpeg'
import imgLuxury from '../assets/Place/Luxury Royal Umrah.jpg'

const packages = [
  {
    name: 'Ramadan Umrah Special',
    icon: Moon,
    highlights: ['Iftar & Suhoor Provided', 'Nightly Qiyamul Layl Prayers', 'Accommodation Close to Haram', 'Special Spiritual Briefings'],
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80',
  },
  {
    name: 'Family Custom Packages',
    icon: Users,
    highlights: ['Spacious Family Hotel Rooms', 'Child Care & Custom Itineraries', 'Flexible Arrival Schedules', 'Generous Family Cohort Discounts'],
    image: imgFamily,
  },
  {
    name: 'Group Pilgrimage Packages',
    icon: Building2,
    highlights: ['Coordinated Group Discounts', 'Shared Luxury Coach Transport', '24/7 Experienced Group Leader', 'Historical Site Visits (Ziyarah)'],
    image: imgGroup,
  },
  {
    name: 'Luxury Royal Umrah',
    icon: Crown,
    highlights: ['5-Star Luxury Haram Hotels', 'VIP Private Transportation', 'Dedicated Scholar Guide', 'Elite Fine Dining Selections'],
    image: imgLuxury,
  },
  {
    name: 'Seasonal Open Packages',
    icon: Calendar,
    highlights: ['Custom Peak Season Bookings', 'Highly Competitive Airline Rates', 'Early-Bird Privilege Passes', 'Flexible Departure Dates'],
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80',
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

export default function UmrahPackages() {
  return (
    <section id="umrah" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">Umrah Pilgrimage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-secondary mb-4">
            Year-Round <span className="text-gradient">Umrah Packages</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Experience the minor pilgrimage with our high-end customizable itineraries designed for maximum spiritual focus.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="group bg-[#FAF9F6] border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                      <pkg.icon size={20} className="text-gold" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-heading font-extrabold text-xl">{pkg.name}</h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2.5">
                    {pkg.highlights.map((h, j) => (
                      <div key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-tight">
                        <CheckCircle size={15} className="text-gold mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <a
                  href={`https://wa.me/94717666084?text=${encodeURIComponent('Assalamu Alaikum Warahmatullahi Wabarakatuh! I am interested in your Umrah package: ' + pkg.name + '. Please guide me with details.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5"
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

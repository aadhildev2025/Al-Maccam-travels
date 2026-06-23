import { Users, Calendar, Star, Shield } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const stats = [
  { icon: Users, value: '5,000+', label: 'Pilgrims Guided' },
  { icon: Calendar, value: '200+', label: 'Successful Groups' },
  { icon: Star, value: '99%', label: 'Satisfaction Rate' },
  { icon: Shield, value: '15+', label: 'Years of Trust' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#FAF9F6] overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <ScrollReveal direction="left" className="w-full lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">About Al-Maccam</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-secondary leading-tight">
              Crafting Sacred Journeys <br />
              <span className="text-gradient">with Utmost Devotion</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Al-Maccam Travels & Tours (Pvt) Ltd is a registered premier Hajj and Umrah service provider based in Sri Lanka. For over 15 years, we have had the honor of helping thousands of pilgrims fulfill their spiritual duties with peace of mind.
            </p>
            
            <p className="text-gray-600 text-base leading-relaxed">
              We handle every step of your travel meticulously — from premium flight connections and quick visa processing to luxurious accommodations steps away from the Haram. Our scholars offer dedicated lectures to enrich your spiritual understanding throughout the journey.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 text-primary">
                    <s.icon size={20} />
                  </div>
                  <div className="text-xl sm:text-2xl font-heading font-extrabold text-secondary">{s.value}</div>
                  <div className="text-gray-500 text-xs font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Image Display with organic liquid-droplet border radius */}
          <ScrollReveal direction="right" className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-primary/20 rounded-[50px_20px_50px_20px] blur-2xl opacity-70" />
              <div className="relative overflow-hidden shadow-2xl border-4 border-white bg-white transition-all duration-500 hover:scale-[1.01]" style={{ borderRadius: '60px 20px 60px 20px' }}>
                <img
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&q=80"
                  alt="Masjid Nabawi Madinah"
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Prophet's Sanctuary</p>
                  <p className="font-heading font-bold text-xl sm:text-2xl">Madinah Al-Munawwarah</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  )
}

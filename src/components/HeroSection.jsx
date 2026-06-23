import { Phone, ChevronDown, ArrowRight, ShieldCheck, Star } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

export default function HeroSection() {
  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  const defaultMsg = 'Assalamu Alaikum Warahmatullahi Wabarakatuh. I would like to inquire about Al-Maccam Hajj & Umrah travels and packages. Please guide me with details.'
  const whatsappUrl = `https://wa.me/94717666084?text=${encodeURIComponent(defaultMsg)}`

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#012B28] pt-28 pb-16 sm:py-32">
      {/* Background Image with Premium Dark Emerald Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=85"
          alt="Holy Kaaba Makkah"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#012B28] via-[#023E3A]/90 to-[#012B28]/95" />
        <div className="absolute inset-0 islamic-pattern opacity-10" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 border border-gold/10 rounded-full animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/5 rounded-full animate-float-delayed pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-2 animate-fade-up">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-xs sm:text-sm font-semibold tracking-widest uppercase">
                Sri Lanka's Premier Hajj & Umrah Partner
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-white leading-tight animate-fade-up-2">
              Your Sacred Journey,
              <span className="block text-gradient mt-2 font-light italic">Guided with Excellence</span>
            </h1>

            <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed animate-fade-up-3">
              Experience a spiritually fulfilling pilgrimage with 5-star accommodations near the Haram, seamless visa processing, and dedicated scholarly guidance from Sri Lanka.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up-4 w-full sm:w-auto pt-4">
              <button
                onClick={() => go('#contact')}
                className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-gold text-secondary px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:bg-gold/90 hover:-translate-y-1 shadow-lg shadow-gold/20"
              >
                <span>Plan Your Journey</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 border border-white/20 hover:-translate-y-1"
              >
                <Phone size={18} />
                Connect via WhatsApp
              </a>
            </div>

            {/* Quick trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 text-white/60 text-xs sm:text-sm animate-fade-up-4">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-gold" />
                <span>100% Ministry Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} className="text-gold fill-gold" />
                <span>Over 15+ Years Trust</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Luxury Image Card */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/30 to-primary/30 rounded-3xl blur-2xl opacity-60 animate-pulse" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-[#012B28] p-3 animate-float">
              <img
                src="https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80"
                alt="Holy Kaaba Makkah"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 bg-secondary/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl text-white">
                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Guaranteed Near Haram Hotels</p>
                <p className="font-heading font-bold text-lg">Makkah Al-Mukarramah</p>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={() => go('#about')}
            className="text-white/40 hover:text-gold transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>

      </div>
    </section>
  )
}

import { useState } from 'react'
import { Phone, ChevronDown, ArrowRight, ShieldCheck, Star, X, Send, User, MessageSquare } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

/* ── Registration Popup Modal ── */
function RegistrationModal({ type, onClose }) {
  const isUmrah = type === 'umrah'
  const [name, setName]       = useState('')
  const [phone, setPhone]     = useState('')
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!name.trim()) return
    const pkg   = isUmrah ? 'Umrah 2026' : 'Hajj 2027'
    const extra = message.trim() ? `\n\nAdditional Message: ${message}` : ''
    const text  = `Assalamu Alaikum Warahmatullahi Wabarakatuh.\n\nI would like to register for the *${pkg} Package*.\n\n👤 Name: ${name.trim()}${phone.trim() ? `\n📞 Phone: ${phone.trim()}` : ''}${extra}\n\nPlease guide me with further details. JazakAllah Khair.`
    window.open(`https://wa.me/94717666084?text=${encodeURIComponent(text)}`, '_blank')
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(1,43,40,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
        style={{ background: 'linear-gradient(145deg, #012B28 0%, #023E3A 100%)', border: '1px solid rgba(212,175,55,0.3)' }}
      >
        {/* Header */}
        <div className="relative px-8 pt-8 pb-6">
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
            style={{ background: isUmrah ? 'linear-gradient(90deg, #D4AF37, #F5D76E)' : 'linear-gradient(90deg, #1D8A84, #2DC7BF)' }} />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={18} />
          </button>

          {/* Badge */}
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 ${isUmrah ? 'bg-gold/15 border border-gold/30' : 'bg-accent/15 border border-accent/30'}`}>
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isUmrah ? 'bg-gold' : 'bg-accent'}`} />
            <span className={`text-xs font-bold uppercase tracking-widest ${isUmrah ? 'text-gold' : 'text-accent'}`}>
              {isUmrah ? 'Now Open' : 'Coming Soon'}
            </span>
          </div>

          <h2 className="text-white font-heading font-extrabold text-2xl sm:text-3xl leading-tight">
            {isUmrah ? 'Umrah 2026' : 'Hajj 2027'}
            <span className="block text-sm font-sans font-normal text-white/50 mt-1 tracking-wide">
              Registration via WhatsApp
            </span>
          </h2>
        </div>

        {/* Form */}
        <div className="px-8 pb-8 space-y-4">
          {/* Name */}
          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
              Full Name <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-white/8 border border-white/15 rounded-2xl pl-11 pr-4 py-3.5 text-white placeholder-white/30 text-sm outline-none focus:border-gold/50 focus:bg-white/12 transition-all"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
              Phone Number <span className="text-white/30 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+94 7X XXX XXXX"
                className="w-full border border-white/15 rounded-2xl pl-11 pr-4 py-3.5 text-white placeholder-white/30 text-sm outline-none focus:border-gold/50 transition-all"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1.5 block">
              Message <span className="text-white/30 font-normal">(optional)</span>
            </label>
            <div className="relative">
              <MessageSquare size={16} className="absolute left-4 top-4 text-white/30" />
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any specific requirements or questions..."
                className="w-full border border-white/15 rounded-2xl pl-11 pr-4 py-3.5 text-white placeholder-white/30 text-sm outline-none focus:border-gold/50 transition-all resize-none"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />
            </div>
          </div>

          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={!name.trim()}
            className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-base transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed mt-2"
            style={{
              background: name.trim()
                ? 'linear-gradient(135deg, #25D366, #128C7E)'
                : 'rgba(255,255,255,0.1)',
              color: '#fff',
              boxShadow: name.trim() ? '0 8px 24px rgba(37,211,102,0.25)' : 'none',
              transform: name.trim() ? undefined : undefined,
            }}
          >
            <Send size={18} />
            Send via WhatsApp
          </button>

          <p className="text-center text-white/30 text-xs">
            You'll be redirected to WhatsApp with your details pre-filled
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Main Hero Section ── */
export default function HeroSection() {
  const [modal, setModal] = useState(null) // 'umrah' | 'hajj' | null

  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  const defaultMsg = 'Assalamu Alaikum Warahmatullahi Wabarakatuh. I would like to inquire about Al-Maccam Hajj & Umrah travels and packages. Please guide me with details.'
  const whatsappUrl = `https://wa.me/94717666084?text=${encodeURIComponent(defaultMsg)}`

  return (
    <>
      {/* Registration Modal */}
      {modal && <RegistrationModal type={modal} onClose={() => setModal(null)} />}

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
              <div className="flex flex-wrap items-center gap-4 pt-6 text-white/60 text-xs sm:text-sm animate-fade-up-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-gold" />
                  <span>100% Ministry Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-gold fill-gold" />
                  <span>Over 15+ Years Trust</span>
                </div>
              </div>

              {/* Clickable Announcement Banners */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full animate-fade-up-4">
                {/* Umrah 2026 */}
                <button
                  onClick={() => setModal('umrah')}
                  className="flex items-center gap-3 bg-gold/15 border border-gold/40 rounded-2xl px-5 py-3 flex-1 text-left group hover:bg-gold/25 hover:border-gold/60 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  <span className="w-2.5 h-2.5 bg-gold rounded-full animate-pulse flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-gold text-[10px] font-bold uppercase tracking-widest">Now Open</p>
                    <p className="text-white font-heading font-bold text-sm sm:text-base">Umrah 2026 Registration</p>
                  </div>
                  <ArrowRight size={16} className="text-gold/60 group-hover:text-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
                </button>

                {/* Hajj 2027 */}
                <button
                  onClick={() => setModal('hajj')}
                  className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 flex-1 text-left group hover:bg-white/20 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-accent text-[10px] font-bold uppercase tracking-widest">Coming Soon</p>
                    <p className="text-white font-heading font-bold text-sm sm:text-base">Hajj 2027 Registration</p>
                  </div>
                  <ArrowRight size={16} className="text-accent/60 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                </button>
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
    </>
  )
}


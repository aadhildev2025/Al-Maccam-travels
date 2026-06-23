import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Send, Mail, MapPin } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const contacts = [
  { role: 'Managing Director', name: 'AL HAJ MPS. THOWFEENA', phones: ['071 766 6084', '077 530 3062'] },
  { role: 'Travel Consultant', name: 'AL HAJ N.M. FAIZAR', phones: ['076 483 8181'] },
  { role: 'Sammanthurai Rep.', name: 'AL HAJ BASHEER (MADANI)', phones: ['074 267 4388'] },
]

const pkgTypes = [
  'Hajj - Economy', 'Hajj - Standard', 'Hajj - Premium', 'Hajj - VIP',
  'Umrah - Ramadan', 'Umrah - Family', 'Umrah - Group', 'Umrah - Luxury',
  'Umrah - Seasonal', 'Other',
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', pkg: '', date: '', msg: '' })

  const submit = (e) => {
    e.preventDefault()
    const greeting = "Assalamu Alaikum Warahmatullahi Wabarakatuh"
    const m = `${greeting}%0A%0A*New Inquiry*%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*Email:* ${encodeURIComponent(form.email)}%0A*Package:* ${encodeURIComponent(form.pkg)}%0A*Date:* ${encodeURIComponent(form.date)}%0A*Message:* ${encodeURIComponent(form.msg)}`
    window.open(`https://wa.me/94717666084?text=${m}`, '_blank')
    setForm({ name: '', phone: '', email: '', pkg: '', date: '', msg: '' })
  }

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 bg-[#FAF9F6]"
    >
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-primary text-xs sm:text-sm font-bold tracking-widest uppercase">Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-secondary">
            Get in <span className="text-gradient">Touch With Us</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Reach out to our managing directors, travel consultants, or submit an online inquiry via WhatsApp directly.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Office Address & Contacts */}
          <ScrollReveal direction="left" className="lg:col-span-5 space-y-6">
            {/* Address & Email Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-md space-y-5">
              <h3 className="font-heading font-extrabold text-secondary text-lg border-b border-gray-100 pb-3">
                Head Office Details
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-secondary font-bold text-xs uppercase tracking-wide">Office Address</p>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    No.15/ Main Street,<br />
                    Madurankuliya, Puttalam,<br />
                    Sri Lanka.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-secondary font-bold text-xs uppercase tracking-wide">Email Address</p>
                  <a href="mailto:thowfeena@gmail.com" className="text-primary hover:text-gold text-sm font-semibold transition-colors block mt-1">
                    thowfeena@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Individual Contact Persons */}
            <div className="space-y-4">
              {contacts.map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:border-gold/30 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-gold text-xs font-bold uppercase tracking-wider block mb-1">
                    {c.role}
                  </span>
                  <h4 className="font-heading font-extrabold text-secondary text-sm sm:text-base mb-2">
                    {c.name}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    {c.phones.map((p, j) => (
                      <a
                        key={j}
                        href={`tel:+94${p.replace(/\s/g, '')}`}
                        className="flex items-center gap-1.5 text-gray-600 hover:text-gold text-xs sm:text-sm transition-colors font-medium"
                      >
                        <Phone size={14} className="text-gold" />
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Inquiry Form */}
          <ScrollReveal direction="right" className="lg:col-span-7">
            <form
              onSubmit={submit}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md space-y-4"
            >
              <h3 className="font-heading font-extrabold text-secondary text-lg border-b border-gray-100 pb-3 mb-2">
                Send Direct Online Inquiry
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full Name *"
                  className="px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all text-secondary"
                />
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Phone Number *"
                  className="px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all text-secondary"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email Address"
                  className="px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all text-secondary"
                />
                <select
                  required
                  value={form.pkg}
                  onChange={(e) => setForm({ ...form, pkg: e.target.value })}
                  className="px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all text-gray-500 font-medium"
                >
                  <option value="">Package Type *</option>
                  {pkgTypes.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all text-gray-500"
              />
              
              <textarea
                rows={3}
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                placeholder="Describe your travel requirements..."
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all resize-none text-secondary"
              />
              
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gold text-secondary py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-bold hover:bg-gold/90 transition-all duration-300 shadow-lg shadow-gold/20"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={16} />
                Submit via WhatsApp
              </motion.button>
            </form>
          </ScrollReveal>
          
        </div>
      </div>
    </section>
  )
}

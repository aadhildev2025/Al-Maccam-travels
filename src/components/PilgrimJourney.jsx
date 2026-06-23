import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const steps = [
  { num: '01', title: 'Registration', desc: 'Express interest and register.' },
  { num: '02', title: 'Consultation', desc: 'Discuss package options.' },
  { num: '03', title: 'Documentation', desc: 'Submit required documents.' },
  { num: '04', title: 'Visa Processing', desc: 'We handle the visa.' },
  { num: '05', title: 'Travel Prep', desc: 'Pre-departure briefing.' },
  { num: '06', title: 'Departure', desc: 'Begin your journey.' },
  { num: '07', title: 'Pilgrimage', desc: 'Perform Hajj or Umrah.' },
  { num: '08', title: 'Safe Return', desc: 'Return with our support.' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const stepItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function PilgrimJourney() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/[0.06] rounded-full px-4 py-1.5 mb-5 border border-gold/10">
            <div className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider">PILGRIM JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary">
            Your Journey <span className="text-gradient">Step by Step</span>
          </h2>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={stepItem}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center
                border border-gray-100 hover:border-gold/20
                shadow-sm hover:shadow-xl hover:-translate-y-1.5
                transition-all duration-500"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full
                flex items-center justify-center mx-auto mb-3
                text-sm sm:text-base font-bold shadow-lg shadow-primary/20"
              >
                {s.num}
              </div>
              <h3 className="font-heading font-bold text-primary text-xs sm:text-sm mb-1.5">
                {s.title}
              </h3>
              <p className="text-gray-500 text-xs">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

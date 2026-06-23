import { motion } from 'framer-motion'
import {
  Shield, Building2, BookOpen, Headphones,
  Star, CheckCircle, HeartHandshake, Users,
} from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const features = [
  { icon: Shield, title: 'Trusted Partner', desc: 'Registered by Sri Lankan authorities for Hajj and Umrah.' },
  { icon: Building2, title: 'Experienced Management', desc: 'Led by Al Haj MPS. Thowfeena with decades of expertise.' },
  { icon: BookOpen, title: 'DMRCA Guidance', desc: 'Aligned with Muslim Religious & Cultural Affairs.' },
  { icon: Headphones, title: '24/7 Support', desc: 'Dedicated team supporting you throughout.' },
  { icon: Star, title: 'Premium Hotels', desc: 'Selected hotels near the Haram for comfort.' },
  { icon: CheckCircle, title: 'Transparent Process', desc: 'Clear pricing with no hidden fees.' },
  { icon: HeartHandshake, title: 'Personalized Service', desc: 'Packages tailored to your specific needs.' },
  { icon: Users, title: 'Professional Team', desc: 'Experienced team for your spiritual journey.' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-light">
      <div className="absolute top-20 left-20 w-72 h-72 bg-gold/5 rounded-full liquid-shape blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full liquid-shape blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal className="text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/[0.06] rounded-full px-4 py-1.5 mb-5 border border-gold/10">
            <div className="w-2 h-2 bg-gold rounded-full" />
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider">WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary">
            Why Choose <span className="text-gradient">Al-Maccam?</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We provide the highest quality pilgrimage experience with integrity and professionalism.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={cardItem}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5
                border border-gray-100 hover:border-gold/20
                shadow-sm hover:shadow-xl hover:-translate-y-1.5
                transition-all duration-500"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/[0.06] rounded-xl
                flex items-center justify-center mb-3
                group-hover:bg-primary group-hover:scale-110
                transition-all duration-500"
              >
                <f.icon
                  size={20}
                  className="text-primary group-hover:text-white transition-colors duration-500"
                />
              </div>
              <h3 className="font-heading font-bold text-primary text-xs sm:text-sm mb-1.5">
                {f.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

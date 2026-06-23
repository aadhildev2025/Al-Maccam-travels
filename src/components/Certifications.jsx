import ScrollReveal from './ScrollReveal'

const certModules = import.meta.glob('../assets/Certificate/*', { eager: true })
const certFiles = Object.values(certModules).map((m) => m.default)

const certs = [
  { title: 'Civil Aviation Authority', subtitle: 'Government of Sri Lanka', desc: 'Authorized agent for international ticketing, passenger handling, and charter flight coordination.' },
  { title: 'Dept. of Muslim Religious Affairs', subtitle: 'Sri Lanka Government', desc: 'Approved coordinator for official Hajj and Umrah pilgrimage delegations from Sri Lanka.' },
  { title: 'Ministry of Hajj & Umrah', subtitle: 'Kingdom of Saudi Arabia', desc: 'Officially registered operator on the KSA Ministry portal for organizing visa and stay arrangements.' },
  { title: 'Tourism Development Authority', subtitle: 'Sri Lanka Tourism', desc: 'Recognized travel and tour services provider upholding national safety and service benchmarks.' },
]

export default function Certifications() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-gold text-xs sm:text-sm font-bold tracking-widest uppercase">Verified & Accredited</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-primary">
            Official <span className="text-gradient">Certifications</span> & Affiliations
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Al-Maccam Travels is fully certified and recognized by Sri Lankan and Saudi Arabian governmental bodies to conduct official Hajj and Umrah services.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              className="bg-[#FAF9F6] border border-gray-100 rounded-3xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-2xl p-2 flex items-center justify-center shadow-inner border border-gray-100">
                  <img
                    src={certFiles[i]}
                    alt={c.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-heading font-bold text-primary mb-1">
                  {c.title}
                </h3>
                <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
                  {c.subtitle}
                </p>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-auto pt-2 border-t border-gray-200/50">
                {c.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

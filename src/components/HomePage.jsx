import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import OurPartners from './OurPartners'
import ServicesSection from './ServicesSection'
import HajjPackages from './HajjPackages'
import UmrahPackages from './UmrahPackages'
import WhyChooseUs from './WhyChooseUs'
import SacredDestinations from './SacredDestinations'
import PilgrimJourney from './PilgrimJourney'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import Certifications from './Certifications'
import ContactSection from './ContactSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <OurPartners />
      <ServicesSection />
      <HajjPackages />
      <UmrahPackages />
      <WhyChooseUs />
      <SacredDestinations />
      <PilgrimJourney />
      <Gallery />
      <Testimonials />
      <Certifications />
      <ContactSection />
    </main>
  )
}

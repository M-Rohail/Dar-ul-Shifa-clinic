import HeroSection from '../sections/HeroSection'
import ServicesOverview from '../sections/ServicesOverview'
import CuppingPreview from '../sections/CuppingPreview'
import DoctorSection from '../sections/DoctorSection'
import StatsSection from '../sections/StatsSection'
import RohaniPreview from '../sections/RohaniPreview'
import HomeServiceSection from '../sections/HomeServiceSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import AppointmentCTA from '../sections/AppointmentCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <CuppingPreview />
      <DoctorSection />
      <RohaniPreview />
      <HomeServiceSection />
      <TestimonialsSection />
      <AppointmentCTA />
    </>
  )
}

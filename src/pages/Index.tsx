import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import VideoShowcaseSection from '@/components/VideoShowcaseSection'
import HandsFreeManagementSection from '@/components/HandsfreeManagementSection'
import FeaturesSection from '@/components/FeaturesSection'
import BusinessShowcaseSection from '@/components/BusinessShowcaseSection'
import AnalyticsSection from '@/components/AnalyticsSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import ScrollDotsSection from '@/components/ScrollDotsSection'
import AncillaryServicesShowcase from '@/components/AncillaryServicesShowcase'
import { heroContent, businessSlides, flippedSlides } from '@/data'
import MusicToggleButton from '@/components/MusicToggleButton'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="">
        <HeroSection heroContent={heroContent} />

        <VideoShowcaseSection heroContent={heroContent} />

        <HandsFreeManagementSection />

        <FeaturesSection />

        <BusinessShowcaseSection businessSlides={businessSlides} />

        <ScrollDotsSection />

        <AncillaryServicesShowcase
          slides={flippedSlides}
          sectionTitle="Go Beyond the Stay"
        />

        <AnalyticsSection />

        <CTASection />

        <FAQSection />

        <Footer />
      </div>

      <MusicToggleButton containerClassName="fixed left-8 bottom-8 z-50 hover:opacity-100 opacity-70" />
    </div>
  )
}

export default Index

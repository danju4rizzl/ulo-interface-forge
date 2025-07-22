import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import VideoShowcaseSection from '@/components/VideoShowcaseSection'
import FeaturesSection from '@/components/FeaturesSection'
import BusinessShowcaseSection from '@/components/BusinessShowcaseSection'
import AnalyticsSection from '@/components/AnalyticsSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import ScrollDotsSection from '@/components/ScrollDotsSection'
import AncillaryServicesShowcase from '@/components/AncillaryServicesShowcase'
import { heroContent, businessSlides, flippedSlides } from '@/data'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-24">
        <HeroSection heroContent={heroContent} />

        <VideoShowcaseSection heroContent={heroContent} />

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
    </div>
  )
}

export default Index

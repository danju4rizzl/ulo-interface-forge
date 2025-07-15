import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import BusinessShowcaseSection from '@/components/BusinessShowcaseSection'
import AnalyticsSection from '@/components/AnalyticsSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import ScrollDotsSection from '@/components/ScrollDotsSection'
import { heroContent, businessSlides } from '@/data'

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSection heroContent={heroContent} />

      <FeaturesSection />

      <BusinessShowcaseSection businessSlides={businessSlides} />

      <ScrollDotsSection />

      <AnalyticsSection />

      <CTASection />

      <FAQSection />

      <Footer />
    </div>
  )
}

export default Index

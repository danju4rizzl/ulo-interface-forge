import React from 'react'
import { Button } from '@/components/ui/button'
import { HeroContent } from '@/types'

interface HeroSectionProps {
  heroContent: HeroContent
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroContent }) => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-normal text-gray-900 mb-8 leading-tight animate-fade-in">
          {heroContent.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed animate-fade-in max-w-3xl mx-auto">
          {heroContent.description}
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg animate-fade-in">
          Get started
        </Button>
      </div>
    </section>
  )
}

export default HeroSection

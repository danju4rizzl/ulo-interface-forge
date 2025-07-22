import React from 'react'
import { Button } from '@/components/ui/button'
import { HeroContent } from '@/types'
import BlurText from '@/components/BlurText'

interface HeroSectionProps {
  heroContent: HeroContent
}

const handleAnimationComplete = () => {
  console.log('Animation completed!')
}

const handleScrollToVideo = () => {
  const videoSection = document.getElementById('video-section')
  if (videoSection) {
    videoSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroContent }) => {
  return (
    <section className="py-36  px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <BlurText
          text="Africa’s Stay Experience"
          bottomText="Trusted and Simplified"
          delay={5}
          animateBy="words"
          direction="bottom"
          onAnimationComplete={handleAnimationComplete}
          className="text-6xl md:text-7xl font-normal text-gray-900 mb-8 leading-tight"
        />
        <p className="text-xl text-gray-600 mb-12 leading-relaxed animate-fade-in max-w-3xl mx-auto">
          {heroContent.description}
        </p>
        <div className="max-w-14 mx-auto animate-bounce duration-1000">
          <button
            onClick={handleScrollToVideo}
            aria-label="Scroll to video section"
          >
            <img src="/icons/ARROW.png" alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

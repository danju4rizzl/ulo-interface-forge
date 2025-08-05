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
    <section className="h-screen flex items-center justify-center bg-primary px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <BlurText
          text="Don’t just visit Africa"
          bottomText="Connect with it.
"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-6xl md:text-7xl font-normal text-white mb-8 leading-tight"
        />
        <p className="text-xl text-white/80 mb-12 leading-relaxed animate-fade-in max-w-3xl mx-auto">
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

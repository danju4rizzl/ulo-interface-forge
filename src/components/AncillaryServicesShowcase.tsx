import React, { useState, useEffect, useRef } from 'react'
import SpotlightCard from '@/components/SpotlightCard'

interface ServiceSlide {
  id: number
  title: string
  description: string
  contentType: 'video' | 'image' | 'component'
  videoUrl?: string
  imageUrl?: string
  component?: React.ReactNode
  // SpotlightCard specific properties
  icon?: React.ReactNode
  spotlightTitle?: string
  spotlightDescription?: string
}

interface AncillaryServicesShowcaseProps {
  slides: ServiceSlide[]
  sectionTitle: string
}

const AncillaryServicesShowcase: React.FC<AncillaryServicesShowcaseProps> = ({
  slides,
  sectionTitle
}) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear any existing timer
  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  // Clear pause timeout
  const clearPauseTimeout = () => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current)
      pauseTimeoutRef.current = null
    }
  }

  // Handle slide change with animation
  const handleSlideChange = (newSlideIndex: number, isManualClick = false) => {
    if (newSlideIndex === activeSlide) return

    clearTimer() // Clear any existing timer
    clearPauseTimeout() // Clear any existing pause timeout
    setIsTransitioning(true)

    // Small delay to trigger fade out, then change slide
    setTimeout(() => {
      setActiveSlide(newSlideIndex)
      // Reset transition state after fade in completes
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }, 150)

    // If manual click, pause auto-advance for 20 seconds
    if (isManualClick) {
      setIsPaused(true)
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false)
      }, 20000) // 20 seconds pause
    }
  }

  // Auto-advance for all content types (3 seconds)
  useEffect(() => {
    if (!isPaused) {
      clearTimer()
      timerRef.current = setTimeout(() => {
        const nextSlide = (activeSlide + 1) % slides.length
        handleSlideChange(nextSlide)
      }, 3000) // 3 seconds for all content
    }
  }, [activeSlide, slides, isPaused])

  // Clean up timers on component unmount
  useEffect(() => {
    return () => {
      clearTimer()
      clearPauseTimeout()
    }
  }, [])

  const renderContent = () => {
    const currentSlide = slides[activeSlide]

    return (
      <div className="h-[600px] w-[500px] -mt-12 flex items-center justify-center">
        <SpotlightCard
          className="w-full h-full flex flex-col items-center justify-center text-center custom-spotlight-card animate-fade-in"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          {currentSlide.icon && (
            <div className="mb-8 text-blue-400 text-6xl">
              {currentSlide.icon}
            </div>
          )}
          {currentSlide.spotlightTitle && (
            <h3 className="text-3xl font-semibold text-white mb-6">
              {currentSlide.spotlightTitle}
            </h3>
          )}
          {/* {currentSlide.spotlightDescription && (
            <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-6">
              {currentSlide.spotlightDescription}
            </p>
          )} */}
          {/* Additional detailed content */}
          <div className="text-gray-400 text-base leading-relaxed max-w-lg text-center">
            <p>{getDetailedDescription(currentSlide.id)}</p>
          </div>
        </SpotlightCard>
      </div>
    )
  }

  // Helper function to provide more detailed descriptions for each service
  const getDetailedDescription = (slideId: number) => {
    const descriptions = {
      0: 'Professional chauffeur services available 24/7. Choose from luxury sedans, SUVs, or executive vehicles. Perfect for airport transfers, business meetings, or special occasions.',
      1: 'Experience breathtaking aerial views with our certified pilots. Ideal for special events, scenic tours, or VIP transportation. All flights include safety briefings and professional service.',
      2: 'Highly trained security professionals with extensive backgrounds in personal protection. Discreet, professional, and reliable service for high-profile individuals and events.',
      3: 'Authentic African wellness treatments using traditional herbs and healing practices. Our certified therapists provide holistic care for mind, body, and spirit rejuvenation.',
      4: 'Premium garment care using eco-friendly processes. Same-day service available with convenient pickup and delivery. Specialized care for delicate fabrics and designer clothing.',
      5: 'World-class chefs trained in international cuisine. Custom menu planning, dietary accommodations, and presentation that exceeds expectations for any occasion.',
      6: 'Certified yoga instructors specializing in African-inspired practices. Sessions include meditation, breathwork, and movement that connects you with ancient wisdom and modern wellness.'
    }
    return descriptions[slideId] || slides[slideId]?.spotlightDescription || ''
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-gray-900 mb-4">
            {sectionTitle}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content Display */}
          <div className="relative">
            <div className="relative aspect-video rounded-lg">
              {/* Content container with fade transition */}
              <div
                key={activeSlide}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {renderContent()}
              </div>
            </div>
          </div>

          {/* Right side - Sliding text content with line timers */}
          <div className="space-y-8">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`flex items-start space-x-4 cursor-pointer transition-all duration-300 ${
                  index === activeSlide
                    ? 'opacity-100'
                    : 'opacity-60 hover:opacity-80'
                }`}
                onClick={() => handleSlideChange(index, true)}
              >
                {/* Line timer */}
                <div className="flex-shrink-0 w-1 h-16 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className={`w-full bg-primary transition-all ease-linear ${
                      index === activeSlide && !isPaused
                        ? 'h-full duration-[3000ms]'
                        : 'h-0 duration-300'
                    }`}
                    style={{
                      transformOrigin: 'top'
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-medium text-gray-900 mb-2 transition-all duration-300 ${
                      index === activeSlide ? 'text-blue-600' : 'text-gray-900'
                    }`}
                  >
                    {slide.title}
                  </h3>
                  {index === activeSlide && (
                    <p className="text-lg text-gray-600 leading-relaxed animate-fade-in">
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AncillaryServicesShowcase

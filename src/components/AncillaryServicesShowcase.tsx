import React, { useState, useEffect, useRef } from 'react'
import SpotlightCard from '@/components/SpotlightCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ServiceSlide {
  id: number
  title: string
  description: string
  contentType: 'video' | 'image' | 'component'
  videoUrl?: string
  imageUrl?: string
  component?: React.ReactNode
  // SpotlightCard specific properties
  icon?: string | React.ReactNode
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
      <div className="flex flex-col items-center">
        <div className="w-[400px] h-[280px] mb-6">
          <SpotlightCard
            className="w-full h-full flex flex-col items-center justify-center text-center custom-spotlight-card animate-fade-in"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            {currentSlide.icon && (
              <div className="mb-6">
                {typeof currentSlide.icon === 'string' ? (
                  <img
                    src={currentSlide.icon}
                    alt={currentSlide.title}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <div className="text-blue-400 text-6xl">
                    {currentSlide.icon}
                  </div>
                )}
              </div>
            )}
            <div className="text-gray-400 text-sm leading-relaxed max-w-xs text-center px-4">
              <p>{currentSlide.spotlightTitle}</p>
            </div>
          </SpotlightCard>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() =>
              handleSlideChange(
                (activeSlide - 1 + slides.length) % slides.length,
                true
              )
            }
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() =>
              handleSlideChange((activeSlide + 1) % slides.length, true)
            }
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    )
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
          {/* Left side - SpotlightCard with navigation */}
          <div className="relative flex justify-center">
            <div
              key={activeSlide}
              className={`transition-opacity duration-500 ease-in-out ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {renderContent()}
            </div>
          </div>

          {/* Right side - Horizontal slider for text content */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0 px-4">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Progress bar */}
                    <div className="w-full h-1 bg-gray-200 rounded-full mt-6">
                      <div
                        className={`h-full bg-gray-900 rounded-full transition-all ease-linear ${
                          index === activeSlide && !isPaused
                            ? 'w-full duration-[3000ms]'
                            : 'w-0 duration-300'
                        }`}
                        style={{
                          transformOrigin: 'left'
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AncillaryServicesShowcase

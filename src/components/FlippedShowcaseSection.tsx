import React, { useState, useEffect, useRef } from 'react'
import { Play } from 'lucide-react'

interface FlippedSlide {
  id: number
  title: string
  description: string
  contentType: 'video' | 'image' | 'component'
  videoUrl?: string
  imageUrl?: string
  component?: React.ReactNode
}

interface FlippedShowcaseSectionProps {
  slides: FlippedSlide[]
  sectionTitle: string
}

const FlippedShowcaseSection: React.FC<FlippedShowcaseSectionProps> = ({
  slides,
  sectionTitle
}) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Clear any existing timer
  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  // Handle slide change with animation
  const handleSlideChange = (newSlideIndex: number) => {
    if (newSlideIndex === activeSlide) return

    clearTimer() // Clear any existing timer
    setIsTransitioning(true)

    // Small delay to trigger fade out, then change slide
    setTimeout(() => {
      setActiveSlide(newSlideIndex)
      // Reset transition state after fade in completes
      setTimeout(() => {
        setIsTransitioning(false)
      }, 300)
    }, 150)
  }

  // Handle video loaded metadata to get duration
  const handleVideoLoadedMetadata = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration
      setVideoDuration(duration)

      // Clear any existing timer and set new one based on video duration
      // Use minimum of 3 seconds if video is too short or duration is invalid
      const timerDuration = duration && duration > 1 ? duration * 1000 : 5000

      clearTimer()
      timerRef.current = setTimeout(() => {
        const nextSlide = (activeSlide + 1) % slides.length
        handleSlideChange(nextSlide)
      }, timerDuration)
    }
  }

  // Handle video ended event
  const handleVideoEnded = () => {
    const nextSlide = (activeSlide + 1) % slides.length
    handleSlideChange(nextSlide)
  }

  // Auto-advance for non-video content
  useEffect(() => {
    if (slides[activeSlide].contentType !== 'video') {
      clearTimer()
      timerRef.current = setTimeout(() => {
        const nextSlide = (activeSlide + 1) % slides.length
        handleSlideChange(nextSlide)
      }, 5000) // 5 seconds for non-video content
    }
  }, [activeSlide, slides])

  // Clean up timer on component unmount
  useEffect(() => {
    return () => clearTimer()
  }, [])

  // Reset timer when active slide changes
  useEffect(() => {
    clearTimer()
    // Timer will be set when video metadata loads or in the effect above
  }, [activeSlide])

  const renderContent = () => {
    const currentSlide = slides[activeSlide]
    
    switch (currentSlide.contentType) {
      case 'video':
        return (
          <video
            ref={videoRef}
            autoPlay
            muted
            controlsList="nodownload"
            className="h-[600px] w-[500px] -mt-12"
            onLoadedMetadata={handleVideoLoadedMetadata}
            onEnded={handleVideoEnded}
            key={activeSlide}
          >
            <source
              src={currentSlide.videoUrl}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )
      case 'image':
        return (
          <img
            src={currentSlide.imageUrl}
            alt={currentSlide.title}
            className="h-[600px] w-[500px] -mt-12 object-cover rounded-lg"
            key={activeSlide}
          />
        )
      case 'component':
        return (
          <div className="h-[600px] w-[500px] -mt-12" key={activeSlide}>
            {currentSlide.component}
          </div>
        )
      default:
        return null
    }
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
                onClick={() => handleSlideChange(index)}
              >
                {/* Line timer */}
                <div className="flex-shrink-0 w-1 h-16 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className={`w-full bg-primary transition-all ease-linear ${
                      index === activeSlide
                        ? `h-full duration-[${
                            slide.contentType === 'video' && videoDuration && videoDuration > 1
                              ? videoDuration * 1000
                              : 5000
                          }ms]`
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

export default FlippedShowcaseSection
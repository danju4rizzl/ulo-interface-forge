import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { BusinessSlide } from '@/types';

interface BusinessShowcaseSectionProps {
  businessSlides: BusinessSlide[];
}

const BusinessShowcaseSection: React.FC<BusinessShowcaseSectionProps> = ({ businessSlides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Handle slide change with animation
  const handleSlideChange = (newSlideIndex: number) => {
    if (newSlideIndex === activeSlide) return

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

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (activeSlide + 1) % businessSlides.length
      handleSlideChange(nextSlide)
    }, 10000)

    return () => clearInterval(interval)
  }, [activeSlide, businessSlides.length])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-gray-900 mb-4">
            Turn a Ulo search into a visit to your business
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Sliding text content with line timers */}
          <div className="space-y-8">
            {businessSlides.map((slide, index) => (
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

          {/* Right side - Single Video Display */}
          <div className="relative">
            <div className="relative aspect-video rounded-lg">
              {/* Video container with fade transition */}
              <div
                key={activeSlide}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <video
                  autoPlay
                  muted
                  loop
                  controlsList="nodownload"
                  className="h-[600px] w-[500px] -mt-20"
                >
                  <source
                    src={businessSlides[activeSlide].videoUrl}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default BusinessShowcaseSection;

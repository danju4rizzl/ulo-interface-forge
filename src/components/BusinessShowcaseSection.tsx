import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import { BusinessSlide } from '@/types';

interface BusinessShowcaseSectionProps {
  businessSlides: BusinessSlide[];
}

const BusinessShowcaseSection: React.FC<BusinessShowcaseSectionProps> = ({ businessSlides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % businessSlides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeSlide, businessSlides.length]);

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
                onClick={() => setActiveSlide(index)}
              >
                {/* Line timer */}
                <div className="flex-shrink-0 w-1 h-16 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className={`w-full bg-blue-600 transition-all ease-linear ${
                      index === activeSlide
                        ? 'h-full duration-[10000ms]'
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
                      index === activeSlide
                        ? 'text-blue-600'
                        : 'text-gray-900'
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

          {/* Right side - Video grid */}
          <div className="grid grid-cols-2 gap-4">
            {businessSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === activeSlide
                    ? 'ring-4 ring-blue-600 scale-105 shadow-xl'
                    : 'hover:scale-102 shadow-md'
                }`}
                onClick={() => setActiveSlide(index)}
              >
                <img
                  src={slide.videoUrl}
                  alt={`${slide.title} preview`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div
                    className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all ${
                      index === activeSlide ? 'scale-110' : 'scale-100'
                    }`}
                  >
                    <Play
                      className="w-6 h-6 text-gray-900 ml-0.5"
                      fill="currentColor"
                    />
                  </div>
                </div>
                {index === activeSlide && (
                  <div className="absolute top-2 left-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessShowcaseSection;

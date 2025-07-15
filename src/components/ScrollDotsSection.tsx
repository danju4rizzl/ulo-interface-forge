import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollDotsSection: React.FC = () => {
  const scrollDotsRef = useRef<HTMLDivElement>(null);
  const blueDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollDotsRef.current && blueDotRef.current) {
      const scrollSection = scrollDotsRef.current
      const blueDot = blueDotRef.current

      gsap.set(blueDot, { y: 0 })

      ScrollTrigger.create({
        trigger: scrollSection,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress
          const maxY = 140 // Total distance the dot can travel (7 gray dots * 40px spacing)
          gsap.to(blueDot, {
            y: progress * maxY,
            duration: 0.1,
            ease: 'none'
          })
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div
      ref={scrollDotsRef}
      className="min-h-52 bg-gray-50 flex items-center justify-center py-20"
    >
      <div className="relative">
        {/* Gray dots path */}
        <div className="flex flex-col items-center space-y-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-gray-400 rounded-full opacity-60"
            />
          ))}
        </div>

        {/* Blue moving dot */}
        <div
          ref={blueDotRef}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-lg z-50"
          style={{ transformOrigin: 'center' }}
        />

        {/* Dotted line connecting the dots */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full">
          <div className="w-full h-full border-l-2 border-dashed border-gray-300 opacity-50" />
        </div>
      </div>
    </div>
  )
};

export default ScrollDotsSection;

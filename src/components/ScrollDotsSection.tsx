import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plane, Home, User } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ScrollDotsSection: React.FC = () => {
  const scrollDotsRef = useRef<HTMLDivElement>(null)
  const blueDotRef = useRef<HTMLDivElement>(null)

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
          const maxY = 135 // Total distance the dot can travel (3 gaps * 40px spacing + adjustment for icon alignment)
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
      className="min-h-52  flex items-center justify-center py-20"
    >
      <div className="relative">
        {/* Dots path with icons */}
        <div className="flex flex-col items-center space-y-10">
          {/* First dot - Airplane icon */}
          <div className="flex items-center justify-center w-8 h-8">
            <img src="/icons/PLANE.png" alt="" className=" z-50" />
          </div>

          {/* Middle dots - Plain gray dots */}
          {Array.from({ length: 1 }).map((_, index) => (
            <img
              key={index}
              src="/ulo-icon.png"
              className="w-[16px] h-[22px] z-50"
            />
          ))}

          {/* Last dot - Home icon */}
          <div className="flex items-center justify-center w-8 h-8">
            <img src="/icons/AFRICA.jpg" alt="" className="z-50" />
            {/* <Home className="w-4 h-4 text-gray-400 opacity-60" /> */}
          </div>
        </div>

        {/* Blue moving dot with human icon */}
        <div
          ref={blueDotRef}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full shadow-lg z-50 flex items-center justify-center"
          style={{ transformOrigin: 'center' }}
        >
          <User className="w-4 h-4 text-white" />
        </div>

        {/* Dotted line connecting the dots */}
        <div className="absolute top-0 left-[15.5px] transform -translate-x-1/2 w-px h-full">
          <div className="w-full h-full border-l-2 border-dashed border-gray-300 opacity-50 -z-10" />
        </div>
      </div>
    </div>
  )
}

export default ScrollDotsSection

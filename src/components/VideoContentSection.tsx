import React, { useRef, useEffect } from 'react'

interface VideoContentSectionProps {
  title1: string
  subtitle1: string
  video1: string
  title2: string
  subtitle2: string
  video2: string
  listItems?: string[] // Optional array of list items
  sectionId?: string
  className?: string
}

const VideoContentSection: React.FC<VideoContentSectionProps> = ({
  title1,
  subtitle1,
  video1,
  title2,
  subtitle2,
  video2,
  listItems = [],
  sectionId = 'video-content-section',
  className = ''
}) => {
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -100px 0px', // 100px threshold
      threshold: 0.1
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement

        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Handle play() promise rejection silently
          })
        } else {
          video.pause()
        }
      })
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    )

    if (video1Ref.current) {
      observer.observe(video1Ref.current)
    }
    if (video2Ref.current) {
      observer.observe(video2Ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <section
        id={`${sectionId}-1`}
        className={`pt-5 px-4 sm:px-6 lg:px-8 min-h-min bg-white ${className}`}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left">
            <h2 className="text-6xl text-primary font-semibold mb-4  max-w-3 tracking-tight ">
              {title1}
            </h2>
            <p className="text-xl text-primary/60 max-w-lg">{subtitle1}</p>
            {/* Dynamic list items */}
            {listItems.length > 0 && (
              <ul className="mt-6 space-y-3">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✔️</span>
                    <span className="text-lg text-primary/80">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right: Video */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <video
                ref={video1Ref}
                className="w-full h-full object-fill"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Second section (centered) */}
      <section id={`${sectionId}-2`} className="py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-5">
          <h3 className="text-4xl font-semibold text-primary mb-3">{title2}</h3>
          <p className="text-xl text-primary/60 max-w-lg mx-auto">
            {subtitle2}
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="relative overflow-hidden ">
            <video
              ref={video2Ref}
              className="ml-14 w-full max-h-[620px] object-contain"
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  )
}

export default VideoContentSection

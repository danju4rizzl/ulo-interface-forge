import React, { useRef, useEffect } from 'react'

const video1 =
  'https://res.cloudinary.com/dfcsaxtru/video/upload/q_40/v1755007130/INTRO_HANDS-FREE__nf3r51.mp4'

const video2 =
  'https://res.cloudinary.com/dfcsaxtru/video/upload/q_40/v1754571912/ANCILARY_V2_gxpgwl.mp4'

const HandsFreeManagementSection: React.FC = () => {
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

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

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
        id="handsfree-section"
        className="pt-5 px-4 sm:px-6 lg:px-8 min-h-min bg-white"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left">
            <h2 className="text-3xl  text-primary font-semibold mb-4">
              Hands‑Free Management
            </h2>
            <p className="text-xl  text-primary/60  max-w-xl">
              Bookings, guest check‑ins, cleaning, and support — handled for
              you. Focus on what matters while Ulô runs the day‑to‑day.
            </p>
          </div>

          {/* Right: Video */}
          <div className="relative">
            <div className="relative  overflow-hidden  ">
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

      {/* https://res.cloudinary.com/deejaydev/video/upload/ac_none,q_86/v1752616484/Ulo-v2-assets/Ulo_Short_Film-2_hal9ry.webm */}

      {/* Hands‑free features highlight (centered) */}
      <section id="handsfree-features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-5">
          <h3 className="text-3xl font-semibold text-primary mb-3">
            Make your stay more special
          </h3>
          <p className="text-xl text-primary/60">
            Get incredible services at a range of prices
            <span className="block"> right at your Ulô stay.</span>
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-[300px] sm:w-[340px] md:w-[320px] aspect-[9/19.5] overflow-hidden">
            <video
              ref={video2Ref}
              className="absolute w-full h-full object-cover"
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

export default HandsFreeManagementSection

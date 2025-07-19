import React, { useRef, useState, useEffect } from 'react'
import { Play } from 'lucide-react'
import { HeroContent } from '@/types'

interface VideoShowcaseSectionProps {
  heroContent: HeroContent
}

const VideoShowcaseSection: React.FC<VideoShowcaseSectionProps> = ({ heroContent }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Handle escape key for fullscreen exit
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isFullscreen) {
        exitFullscreen()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen])

  // Sync video playing state with actual video state
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsVideoPlaying(true)
    const handlePause = () => setIsVideoPlaying(false)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [])

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
        videoRef.current.muted = false
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const enterFullscreen = async () => {
    if (containerRef.current && !isFullscreen) {
      try {
        await containerRef.current.requestFullscreen()
      } catch (error) {
        console.error('Error entering fullscreen:', error)
      }
    }
  }

  const exitFullscreen = async () => {
    if (isFullscreen) {
      try {
        await document.exitFullscreen()
      } catch (error) {
        console.error('Error exiting fullscreen:', error)
      }
    }
  }

  const handleDoubleClick = () => {
    if (isFullscreen) {
      exitFullscreen()
    } else {
      enterFullscreen()
    }
  }

  const handleVideoClick = (event: React.MouseEvent) => {
    // Prevent the overlay click when clicking on video controls
    if ((event.target as HTMLElement).closest('video')) {
      return
    }
    handleVideoToggle()
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-normal text-gray-900 mb-4">
            See How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Watch a demonstration of Ulo Business Profile in action
          </p>
        </div>
        
        <div
          ref={containerRef}
          className={`relative bg-gray-900 rounded-2xl overflow-hidden aspect-video mx-auto ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'max-w-4xl'
          }`}
          onDoubleClick={handleDoubleClick}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            controls
            controlsList="nodownload"
            onPlay={() => setIsVideoPlaying(true)}
            onPause={() => setIsVideoPlaying(false)}
            onDoubleClick={handleDoubleClick}
            poster="/video-placeholder.jpg"
          >
            <source src={heroContent.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Gradient overlay - only show when not in fullscreen */}
          {!isFullscreen && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 pointer-events-none"></div>
          )}

          {/* Custom play/pause overlay - only show when video is paused and not in fullscreen */}
          {!isVideoPlaying && !isFullscreen && (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-30"
              onClick={handleVideoClick}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105">
                <Play
                  className="w-8 h-8 text-gray-900 ml-1 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                />
              </div>
            </div>
          )}

          {/* Video description - only show when not in fullscreen */}
          {!isFullscreen ||
            (isVideoPlaying && (
              <div className="absolute bottom-4 left-4 text-white pointer-events-none">
                <p className="text-sm opacity-80">
                  See how Ulo Business Profile works
                </p>
              </div>
            ))}

          {/* Fullscreen instructions - only show in fullscreen */}
          {isFullscreen && (
            <div className="absolute top-4 right-4 text-white bg-black bg-opacity-50 px-3 py-2 rounded text-sm pointer-events-none">
              Press ESC or double-click to exit fullscreen
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default VideoShowcaseSection
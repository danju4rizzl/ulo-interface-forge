import React, { useEffect, useRef, useState } from 'react'
import { Drum } from 'lucide-react'

export type MusicToggleButtonProps = {
  src?: string
  containerClassName?: string
  buttonClassName?: string
}

const DEFAULT_MUSIC_URL =
  'https://res.cloudinary.com/dfcsaxtru/video/upload/v1755008449/african-night-171020_iwwvbv.mp3'

const MusicToggleButton: React.FC<MusicToggleButtonProps> = ({
  src = DEFAULT_MUSIC_URL,
  containerClassName = 'left-4 bottom-4',
  buttonClassName = ''
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
        audioRef.current.load()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = async () => {
    try {
      if (!audioRef.current) {
        const audio = new Audio(src)
        audio.loop = false
        audioRef.current = audio
        audio.addEventListener('ended', () => setIsPlaying(false))
      }

      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (err) {
      console.error('Failed to toggle background music:', err)
    }
  }

  return (
    <div className={containerClassName}>
      <button
        type="button"
        aria-label={
          isPlaying ? 'Pause background music' : 'Play background music'
        }
        onClick={togglePlay}
        className={`relative inline-flex h-16 w-16 items-center justify-center rounded-full transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2  ${buttonClassName}`}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {!isPlaying && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-10 "></span>
        )}
        {isPlaying ? (
          <img src="/icons/PAUSE_DRUM.png" className="relative z-10" />
        ) : (
          <img src="/icons/PLAY_DRUM.png" className="relative z-10" />
        )}
      </button>
    </div>
  )
}

export default MusicToggleButton

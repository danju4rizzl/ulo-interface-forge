import { motion, Transition } from 'framer-motion'
import { useEffect, useRef, useState, useMemo, useLayoutEffect } from 'react'

type BlurTextProps = {
  text?: string
  bottomText?: string // optional second line
  delay?: number
  className?: string
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom'
  threshold?: number
  rootMargin?: string
  animationFrom?: Record<string, string | number>
  animationTo?: Array<Record<string, string | number>>
  easing?: (t: number) => number
  onAnimationComplete?: () => void
  stepDuration?: number
  // New props for cycling text
  suffix?: string[] // Array of texts to cycle through after the main text
  cycleInterval?: number // Time in milliseconds between text changes (default: 3000)
}

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s))
  ])

  const keyframes: Record<string, Array<string | number>> = {}
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])]
  })
  return keyframes
}

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  bottomText,
  delay = 50,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.9,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  suffix,
  cycleInterval = 3000
}) => {
  const [inView, setInView] = useState(false)
  const [currentsuffixIndex, setCurrentsuffixIndex] = useState(0)
  const [initialAnimationComplete, setInitialAnimationComplete] =
    useState(false)
  // Crossfade state to avoid flicker between suffix transitions
  const [prevSuffixIndex, setPrevSuffixIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const cycleTimerRef = useRef<NodeJS.Timeout | null>(null)
  const crossfadeTimerRef = useRef<NodeJS.Timeout | null>(null)
  // Measurement refs to lock container width to the widest suffix
  const measureRef = useRef<HTMLSpanElement>(null)
  const [maxSuffixWidth, setMaxSuffixWidth] = useState<number | null>(null)

  // Split text into prefix and suffix parts for separate animation
  const prefixElements = useMemo(() => {
    if (!text) return []
    return animateBy === 'words' ? text.split(' ') : text.split('')
  }, [text, animateBy])

  const currentsuffixText = useMemo(() => {
    if (!suffix || suffix.length === 0) return ''
    return suffix[currentsuffixIndex]
  }, [suffix, currentsuffixIndex])

  const suffixElements = useMemo(() => {
    if (!currentsuffixText) return []
    return animateBy === 'words'
      ? currentsuffixText.split(' ')
      : currentsuffixText.split('')
  }, [currentsuffixText, animateBy])

  const prevSuffixText = useMemo(() => {
    if (prevSuffixIndex === null || !suffix || suffix.length === 0) return ''
    return suffix[prevSuffixIndex]
  }, [prevSuffixIndex, suffix])

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current as Element)
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  // Handle initial animation completion
  const handleInitialAnimationComplete = () => {
    setInitialAnimationComplete(true)
    if (onAnimationComplete) {
      onAnimationComplete()
    }
  }

  // Cycling text effect - starts after initial animation is complete
  useEffect(() => {
    if (!suffix || suffix.length <= 1 || !initialAnimationComplete) return

    const crossfadeMs = 600

    const startCycling = () => {
      cycleTimerRef.current = setTimeout(() => {
        setCurrentsuffixIndex((prevIndex) => {
          // Keep previous index for crossfade-out
          setPrevSuffixIndex(prevIndex)

          // Schedule removal of previous after crossfade completes
          if (crossfadeTimerRef.current) clearTimeout(crossfadeTimerRef.current)
          crossfadeTimerRef.current = setTimeout(() => {
            setPrevSuffixIndex(null)
          }, crossfadeMs)

          const next = (prevIndex + 1) % suffix.length
          return next
        })

        // Continue cycling
        startCycling()
      }, cycleInterval)
    }

    startCycling()

    return () => {
      if (cycleTimerRef.current) {
        clearTimeout(cycleTimerRef.current)
        cycleTimerRef.current = null
      }
      if (crossfadeTimerRef.current) {
        clearTimeout(crossfadeTimerRef.current)
        crossfadeTimerRef.current = null
      }
    }
  }, [suffix, cycleInterval, initialAnimationComplete])

  // Measure the widest suffix and lock container width to avoid wrap and layout shift
  useLayoutEffect(() => {
    const compute = () => {
      if (!measureRef.current) return
      const children = Array.from(measureRef.current.children) as HTMLElement[]
      const widths = children.map((el) => el.offsetWidth)
      const max = widths.length ? Math.max(...widths) : null
      setMaxSuffixWidth(max)
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [suffix, animateBy])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (cycleTimerRef.current) {
        clearTimeout(cycleTimerRef.current)
        cycleTimerRef.current = null
      }
    }
  }, [])

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -50 }
        : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  )

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  )

  const fromSnapshot = animationFrom ?? defaultFrom
  const toSnapshots = animationTo ?? defaultTo

  const stepCount = toSnapshots.length + 1
  const totalDuration = stepDuration * (stepCount - 1)
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  )

  // Crossfade duration for cycling between suffix texts (in seconds)
  const crossFadeDurationSec = 0.9

  return (
    <div
      ref={ref}
      className={`blur-text-block ${className} flex flex-col items-center`}
    >
      <motion.h1
        className="blur-text text-center min-w-[1545px]"
        layout
        transition={{ layout: { type: 'spring', stiffness: 300, damping: 30 } }}
        style={{ display: 'inline-block' }}
      >
        {/* Hidden measurer for suffix widths */}
        <span
          ref={measureRef}
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: -99999,
            top: 0,
            visibility: 'hidden',
            whiteSpace: 'nowrap',
            pointerEvents: 'none'
          }}
        >
          {suffix?.map((s, i) => (
            <span key={i} style={{ display: 'inline-block' }}>
              {s.replace(/ /g, '\u00A0')}
            </span>
          ))}
        </span>
        {/* Render prefix text (static after initial animation) */}
        <motion.span
          layout
          style={{ display: 'inline-flex', alignItems: 'baseline' }}
        >
          {prefixElements.map((segment: string, index: number) => {
            const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)

            const spanTransition: Transition = {
              duration: totalDuration,
              times,
              delay: (index * delay) / 1000
            }
            ;(spanTransition as any).ease = easing

            return (
              <motion.span
                key={`prefix-${index}`}
                initial={fromSnapshot}
                animate={inView ? animateKeyframes : fromSnapshot}
                transition={spanTransition}
                style={{
                  display: 'inline-block',
                  willChange: 'transform, filter, opacity'
                }}
              >
                {segment === ' ' ? '\u00A0' : segment}
                {animateBy === 'words' &&
                  index < prefixElements.length - 1 &&
                  '\u00A0'}
              </motion.span>
            )
          })}
        </motion.span>

        {/* Add space between prefix and suffix if both exist */}
        {prefixElements.length > 0 && suffixElements.length > 0 && (
          <motion.span
            initial={fromSnapshot}
            animate={
              inView ? buildKeyframes(fromSnapshot, toSnapshots) : fromSnapshot
            }
            transition={{
              duration: totalDuration,
              times,
              delay: (prefixElements.length * delay) / 1000
            }}
            layout
            style={{
              display: 'inline-block',
              willChange: 'transform, filter, opacity'
            }}
          >
            {'\u00A0'}
          </motion.span>
        )}

        {/* Render suffix text */}
        {!initialAnimationComplete && suffixElements.length > 0 && (
          // Initial entrance animation (per word/letter with stagger)
          <>
            {suffixElements.map((segment: string, index: number) => {
              const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)
              const spanTransition: Transition = {
                duration: totalDuration,
                times,
                delay: ((prefixElements.length + 1 + index) * delay) / 1000
              }
              ;(spanTransition as any).ease = easing

              return (
                <motion.span
                  key={`suffix-initial-${index}`}
                  initial={fromSnapshot}
                  animate={inView ? animateKeyframes : fromSnapshot}
                  transition={spanTransition}
                  onAnimationComplete={
                    index === suffixElements.length - 1
                      ? handleInitialAnimationComplete
                      : undefined
                  }
                  layout
                  style={{
                    display: 'inline-block',
                    willChange: 'transform, filter, opacity'
                  }}
                >
                  {segment === ' ' ? '\u00A0' : segment}
                  {animateBy === 'words' &&
                    index < suffixElements.length - 1 &&
                    '\u00A0'}
                </motion.span>
              )
            })}
          </>
        )}

        {initialAnimationComplete && (
          // Crossfade between previous and current suffix to avoid flicker
          <span
            className="relative inline-block"
            style={{
              position: 'relative',
              display: 'inline-block',
              whiteSpace: 'nowrap'
            }}
          >
            {prevSuffixIndex !== null && (
              <motion.span
                key={`prev-${prevSuffixIndex}`}
                initial={{ opacity: 1, filter: 'blur(0px)' }}
                animate={{ opacity: 0, filter: 'blur(6px)' }}
                transition={{
                  duration: crossFadeDurationSec,
                  ease: 'easeInOut'
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none'
                }}
              ></motion.span>
            )}
            <motion.span
              key={`curr-${currentsuffixIndex}`}
              initial={{ opacity: 0, filter: 'blur(6px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: crossFadeDurationSec, ease: 'easeInOut' }}
              style={{ display: 'inline-block' }}
            >
              {currentsuffixText.replace(/ /g, '\u00A0')}
            </motion.span>
          </span>
        )}

        {/* If no suffix, handle completion on prefix */}
        {!suffix && prefixElements.length > 0 && (
          <motion.span
            key="completion-trigger"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            transition={{
              delay:
                ((prefixElements.length - 1) * delay) / 1000 + totalDuration
            }}
            onAnimationComplete={handleInitialAnimationComplete}
            style={{ display: 'none' }}
          />
        )}
      </motion.h1>
      {bottomText && (
        <h1 className="blur-text text-center mt-2">
          {(animateBy === 'words'
            ? bottomText.split(' ')
            : bottomText.split('')
          ).map((segment: string, index: number, arr: string[]) => {
            const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)

            const spanTransition: Transition = {
              duration: totalDuration,
              times,
              delay: (index * delay) / 1000
            }
            ;(spanTransition as any).ease = easing

            return (
              <motion.span
                key={`bottom-${index}`}
                initial={fromSnapshot}
                animate={inView ? animateKeyframes : fromSnapshot}
                transition={spanTransition}
                style={{
                  display: 'inline-block',
                  willChange: 'transform, filter, opacity'
                }}
              >
                {segment === ' ' ? '\u00A0' : segment}
                {animateBy === 'words' && index < arr.length - 1 && '\u00A0'}
              </motion.span>
            )
          })}
        </h1>
      )}
    </div>
  )
}

export default BlurText

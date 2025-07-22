import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

// Demo profile images (replace with your own or use public domain avatars)
const profiles = [
  { id: 1, name: 'Alice', img: '/people/1.jpg' },
  { id: 2, name: 'Bob', img: '/people/2.jpg' },
  { id: 3, name: 'Carol', img: '/people/3.jpg' },
  { id: 4, name: 'David', img: '/people/4.jpg' },
  { id: 5, name: 'Eve', img: '/people/5.jpg' },
  { id: 6, name: 'Frank', img: '/people/6.jpg' },
  { id: 7, name: 'Grace', img: '/people/7.jpg' },
  { id: 8, name: 'Heidi', img: '/people/8.jpg' }
]

// Define connections (by index in profiles array)
const connections = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 6],
  [5, 7],
  [6, 7],
  [2, 7],
  [1, 6]
]

interface NodePosition {
  x: number
  y: number
}

const PeopleConnections: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [positions, setPositions] = useState<NodePosition[]>([])
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState<HTMLImageElement[]>([])

  // Responsive sizing
  const [size, setSize] = useState({ width: 480, height: 340 })

  // Load images
  useEffect(() => {
    let loaded = 0
    const imgs: HTMLImageElement[] = []
    profiles.forEach((profile, i) => {
      const img = new window.Image()
      img.src = profile.img
      img.onload = () => {
        loaded++
        if (loaded === profiles.length) {
          setImages(imgs)
          setLoading(false)
        }
      }
      img.onerror = () => {
        loaded++
        if (loaded === profiles.length) {
          setImages(imgs)
          setLoading(false)
        }
      }
      imgs[i] = img
    })
  }, [])

  // Responsive canvas
  useEffect(() => {
    function handleResize() {
      const w = Math.min(480, window.innerWidth * 0.9)
      const h = Math.min(340, window.innerHeight * 0.4)
      setSize({ width: w, height: h })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Arrange nodes in a scattered (random, but stable) layout
  useEffect(() => {
    const { width, height } = size
    // Use a seeded pseudo-random for stable scatter
    function seededRandom(seed: number) {
      let x = Math.sin(seed) * 10000
      return x - Math.floor(x)
    }
    const margin = 60
    const pos: NodePosition[] = profiles.map((_, i) => {
      // Spread nodes in the area, but not too close to the edge
      const angle = (2 * Math.PI * i) / profiles.length
      const radius =
        (Math.min(width, height) / 2.2) * (0.7 + 0.3 * seededRandom(i + 1))
      const cx =
        width / 2 +
        radius * Math.cos(angle + seededRandom(i + 2)) * seededRandom(i + 3)
      const cy =
        height / 2 +
        radius * Math.sin(angle + seededRandom(i + 4)) * seededRandom(i + 5)
      // Clamp to margin
      return {
        x: Math.max(margin, Math.min(width - margin, cx)),
        y: Math.max(margin, Math.min(height - margin, cy))
      }
    })
    setPositions(pos)
  }, [size])

  // Draw connections and nodes
  useEffect(() => {
    if (!canvasRef.current || loading || positions.length !== profiles.length)
      return
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, size.width, size.height)

    // Animate lines
    let frame = 0
    let raf: number
    function draw() {
      ctx.clearRect(0, 0, size.width, size.height)
      // Draw lines
      ctx.save()
      ctx.strokeStyle = '#60a5fa' // blue-400
      ctx.lineWidth = 2
      ctx.setLineDash([8, 8])
      ctx.globalAlpha = 0.7
      connections.forEach(([a, b], i) => {
        ctx.beginPath()
        ctx.moveTo(positions[a].x, positions[a].y)
        ctx.lineTo(positions[b].x, positions[b].y)
        ctx.lineDashOffset = -frame * (1 + i * 0.1)
        ctx.stroke()
      })
      ctx.restore()
      // Draw nodes
      profiles.forEach((profile, i) => {
        ctx.save()
        ctx.beginPath()
        ctx.arc(positions[i].x, positions[i].y, 38, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.shadowColor = '#60a5fa'
        ctx.shadowBlur = 12
        ctx.clip()
        if (images[i]?.complete && images[i]?.naturalWidth) {
          ctx.drawImage(
            images[i],
            positions[i].x - 38,
            positions[i].y - 38,
            76,
            76
          )
        } else {
          ctx.fillStyle = '#e5e7eb'
          ctx.fill()
        }
        ctx.restore()
        // Draw border
        ctx.save()
        ctx.beginPath()
        ctx.arc(positions[i].x, positions[i].y, 38, 0, 2 * Math.PI)
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = 4
        ctx.stroke()
        ctx.restore()
      })
      frame += 1.5
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [positions, loading, images, size])

  return (
    <div
      className={cn(
        'flex items-center justify-center w-full h-full',
        'relative min-h-[260px]'
      )}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 z-10">
          <span className="text-blue-500 animate-pulse text-lg font-medium">
            Loading connections...
          </span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={size.width}
        height={size.height}
        className="w-full h-auto max-w-[480px] max-h-[340px] rounded-xl shadow-lg bg-blue-50 border border-blue-100"
        aria-label="People connections visualization"
      />
    </div>
  )
}

export default PeopleConnections

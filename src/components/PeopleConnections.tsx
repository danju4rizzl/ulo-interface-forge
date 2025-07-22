import React, { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

// Demo profile images (replace with your own or use public domain avatars)
const profiles = [
  {
    id: 1,
    name: 'Alice',
    img: 'https://randomuser.me/api/portraits/women/69.jpg'
  },
  { id: 2, name: 'Bob', img: 'https://randomuser.me/api/portraits/men/54.jpg' },
  {
    id: 3,
    name: 'Carol',
    img: 'https://randomuser.me/api/portraits/men/80.jpg'
  },
  {
    id: 4,
    name: 'David',
    img: 'https://randomuser.me/api/portraits/men/30.jpg'
  },
  { id: 5, name: 'Eve', img: 'https://randomuser.me/api/portraits/men/16.jpg' },
  {
    id: 6,
    name: 'Tola',
    img: 'https://randomuser.me/api/portraits/women/92.jpg'
  },
  {
    id: 7,
    name: 'Grace',
    img: 'https://randomuser.me/api/portraits/women/30.jpg'
  },
  {
    id: 8,
    name: 'Heidi',
    img: 'https://randomuser.me/api/portraits/women/16.jpg'
  }
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
  vx?: number
  vy?: number
}

interface Node extends NodePosition {
  id: number
  name: string
  img: string
  radius: number
}

// Force simulation utilities
const NODE_RADIUS = 38
const MIN_DISTANCE = NODE_RADIUS * 2 + 30 // 30px buffer
const REPULSION_STRENGTH = 1000
const DAMPING = 0.8
const MAX_ITERATIONS = 100

// Collision detection and resolution
const detectCollision = (node1: NodePosition, node2: NodePosition): boolean => {
  const dx = node1.x - node2.x
  const dy = node1.y - node2.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  return distance < MIN_DISTANCE
}

const resolveCollision = (node1: NodePosition, node2: NodePosition): void => {
  const dx = node1.x - node2.x
  const dy = node1.y - node2.y
  const distance = Math.sqrt(dx * dx + dy * dy)

  if (distance < MIN_DISTANCE && distance > 0) {
    const overlap = MIN_DISTANCE - distance
    const separationX = (dx / distance) * overlap * 0.5
    const separationY = (dy / distance) * overlap * 0.5

    node1.x += separationX
    node1.y += separationY
    node2.x -= separationX
    node2.y -= separationY
  }
}

// Force-directed layout simulation
const applyForces = (
  nodes: NodePosition[],
  width: number,
  height: number
): void => {
  const margin = NODE_RADIUS + 20

  // Apply repulsion forces between all nodes
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance > 0 && distance < MIN_DISTANCE * 2) {
        const force = REPULSION_STRENGTH / (distance * distance)
        const fx = (dx / distance) * force
        const fy = (dy / distance) * force

        nodes[i].vx = (nodes[i].vx || 0) + fx
        nodes[i].vy = (nodes[i].vy || 0) + fy
        nodes[j].vx = (nodes[j].vx || 0) - fx
        nodes[j].vy = (nodes[j].vy || 0) - fy
      }
    }
  }

  // Apply velocity and damping
  nodes.forEach((node) => {
    node.vx = (node.vx || 0) * DAMPING
    node.vy = (node.vy || 0) * DAMPING

    node.x += node.vx || 0
    node.y += node.vy || 0

    // Keep nodes within bounds
    node.x = Math.max(margin, Math.min(width - margin, node.x))
    node.y = Math.max(margin, Math.min(height - margin, node.y))
  })
}

// Generate initial positions with better distribution
const generateInitialPositions = (
  count: number,
  width: number,
  height: number
): NodePosition[] => {
  const positions: NodePosition[] = []
  const margin = NODE_RADIUS + 20
  const centerX = width / 2
  const centerY = height / 2

  // Use seeded random for consistent layout
  function seededRandom(seed: number) {
    let x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }

  // Generate initial positions in a spiral pattern
  for (let i = 0; i < count; i++) {
    const angle = (2 * Math.PI * i) / count + seededRandom(i + 1) * 0.5
    const radius =
      Math.min(width, height) * 0.25 * (1 + seededRandom(i + 2) * 0.5)

    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)

    positions.push({
      x: Math.max(margin, Math.min(width - margin, x)),
      y: Math.max(margin, Math.min(height - margin, y)),
      vx: 0,
      vy: 0
    })
  }

  // Run force simulation to resolve overlaps
  for (let iteration = 0; iteration < MAX_ITERATIONS; iteration++) {
    let hasCollisions = false

    // Check for collisions and resolve them
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (detectCollision(positions[i], positions[j])) {
          resolveCollision(positions[i], positions[j])
          hasCollisions = true
        }
      }
    }

    // Apply forces for natural distribution
    applyForces(positions, width, height)

    // If no collisions and low velocity, we can stop early
    if (
      !hasCollisions &&
      positions.every(
        (p) => Math.abs(p.vx || 0) < 0.1 && Math.abs(p.vy || 0) < 0.1
      )
    ) {
      break
    }
  }

  return positions
}

const PeopleConnections: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [positions, setPositions] = useState<NodePosition[]>([])
  const [loading, setLoading] = useState(true)
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)

  // Responsive sizing
  const [size, setSize] = useState({ width: 480, height: 340 })

  // Load images and set loading state
  useEffect(() => {
    let loaded = 0
    profiles.forEach((profile) => {
      const img = new window.Image()
      img.src = profile.img
      img.onload = () => {
        loaded++
        if (loaded === profiles.length) {
          setLoading(false)
        }
      }
      img.onerror = () => {
        loaded++
        if (loaded === profiles.length) {
          setLoading(false)
        }
      }
    })
  }, [])

  // Responsive sizing
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

  // Generate optimized node positions
  useEffect(() => {
    if (size.width > 0 && size.height > 0) {
      const newPositions = generateInitialPositions(
        profiles.length,
        size.width,
        size.height
      )
      setPositions(newPositions)
    }
  }, [size])

  // Handle node hover
  const handleNodeHover = useCallback((nodeIndex: number | null) => {
    setHoveredNode(nodeIndex)
  }, [])

  // Connection line component
  const ConnectionLines = () => (
    <svg
      className="absolute inset-0 pointer-events-none"
      width={size.width}
      height={size.height}
    >
      {connections.map(([a, b], i) => {
        if (!positions[a] || !positions[b]) return null
        return (
          <motion.line
            key={`connection-${a}-${b}`}
            x1={positions[a].x}
            y1={positions[a].y}
            x2={positions[b].x}
            y2={positions[b].y}
            stroke="#60a5fa"
            strokeWidth="2"
            strokeDasharray="8,8"
            strokeOpacity="0.7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            style={{
              strokeDashoffset: `${-i * 10}px`
            }}
          />
        )
      })}
    </svg>
  )

  // Node component with bubble effects
  const NodeComponent = ({
    profile,
    index,
    position
  }: {
    profile: (typeof profiles)[0]
    index: number
    position: NodePosition
  }) => (
    <motion.div
      key={profile.id}
      className="absolute pointer-events-auto cursor-pointer"
      style={{
        left: position.x - NODE_RADIUS,
        top: position.y - NODE_RADIUS,
        width: NODE_RADIUS * 2,
        height: NODE_RADIUS * 2
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: index * 0.1
      }}
      whileHover={{
        scale: 1.1,
        y: -5,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 10
        }
      }}
      onHoverStart={() => handleNodeHover(null)}
      onHoverEnd={() => handleNodeHover(null)}
    >
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg "
        animate={{
          boxShadow:
            hoveredNode === index
              ? '0 0 30px rgba(59, 130, 246, 0.6)'
              : '0 0 15px rgba(59, 130, 246, 0.3)'
        }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={profile.img}
          alt={profile.name}
          className="w-full h-full object-cover z-20"
          loading="lazy"
        />
        <motion.div
          className="absolute inset-0 bg-blue-400 opacity-0"
          animate={{
            opacity: hoveredNode === index ? 0.1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Name tooltip */}
      <AnimatePresence>
        {hoveredNode === index && (
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {profile.name}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )

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

      <div
        ref={containerRef}
        className="relative w-full h-auto max-w-[480px] max-h-[340px]  overflow-hidden"
        style={{
          width: size.width,
          height: size.height,
          backgroundImage: ' url(/ulo-icon.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundBlendMode: 'multiply'
        }}
        aria-label="People connections visualization"
      >
        {/* Connection lines */}
        {positions.length === profiles.length && <ConnectionLines />}

        {/* Nodes */}
        {positions.length === profiles.length &&
          profiles.map((profile, index) => (
            <NodeComponent
              key={profile.id}
              profile={profile}
              index={index}
              position={positions[index]}
            />
          ))}
      </div>
    </div>
  )
}

export default PeopleConnections

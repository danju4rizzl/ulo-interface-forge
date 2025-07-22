# People Connections Component Improvements

## Overview

The PeopleConnections component has been completely redesigned to provide better node layout, collision detection, and bubble-like hover effects while maintaining connection lines between nodes.

## Key Features Implemented

### 1. Force-Directed Layout Algorithm
- **Collision Detection**: Automatically detects when nodes are too close together (minimum 30px buffer)
- **Force Simulation**: Uses repulsion forces to naturally spread nodes apart
- **Iterative Positioning**: Runs up to 100 iterations to resolve overlaps and achieve optimal layout
- **Boundary Constraints**: Keeps all nodes within the container bounds with proper margins

### 2. Bubble-like Hover Effects
- **Smooth Scaling**: Nodes scale up to 110% on hover with spring animation
- **Floating Motion**: Nodes move upward by 5px when hovered, creating a floating effect
- **Enhanced Glow**: Dynamic box-shadow that intensifies on hover
- **Spring Physics**: Uses Framer Motion's spring animations for natural movement

### 3. Intelligent Node Arrangement
- **Spiral Initial Distribution**: Starts with a spiral pattern for better initial spread
- **Collision Resolution**: Automatically separates overlapping nodes
- **Force-Based Positioning**: Uses physics simulation for natural node distribution
- **Stable Layout**: Seeded random ensures consistent positioning across renders

### 4. Connection Line Preservation
- **SVG-Based Lines**: Smooth, scalable connection lines that adjust dynamically
- **Animated Appearance**: Lines animate in with staggered timing
- **Dashed Animation**: Moving dash pattern for visual appeal
- **Dynamic Updates**: Lines automatically follow nodes during repositioning

### 5. Smooth Transitions
- **Framer Motion Integration**: All animations use Framer Motion for optimal performance
- **Staggered Entrance**: Nodes appear with cascading animation delays
- **Spring Physics**: Natural bounce and settle effects
- **Hover Transitions**: Smooth state changes with proper easing

## Technical Implementation

### Core Algorithms

#### Force Simulation
```typescript
const applyForces = (nodes: NodePosition[], width: number, height: number): void => {
  // Apply repulsion forces between all nodes
  // Keep nodes within bounds
  // Apply velocity damping
}
```

#### Collision Detection
```typescript
const detectCollision = (node1: NodePosition, node2: NodePosition): boolean => {
  const distance = Math.sqrt(dx * dx + dy * dy)
  return distance < MIN_DISTANCE
}
```

#### Position Generation
```typescript
const generateInitialPositions = (count: number, width: number, height: number): NodePosition[] => {
  // Generate spiral pattern
  // Run force simulation
  // Resolve all collisions
}
```

### Component Architecture

#### DOM-Based Rendering
- Replaced canvas-based rendering with DOM elements for better interaction
- Each node is a separate React component with individual hover states
- SVG for connection lines with smooth animations

#### Animation System
- **Entry Animations**: Staggered scale and opacity transitions
- **Hover Effects**: Scale, translate, and glow animations
- **Connection Lines**: Animated path drawing with dash effects
- **Tooltips**: Smooth appearance/disappearance on hover

## Configuration Options

### Constants
```typescript
const NODE_RADIUS = 38                    // Node size in pixels
const MIN_DISTANCE = NODE_RADIUS * 2 + 30 // Minimum spacing between nodes
const REPULSION_STRENGTH = 1000           // Force simulation strength
const DAMPING = 0.8                       // Velocity damping factor
const MAX_ITERATIONS = 100                // Maximum simulation iterations
```

### Animation Settings
- **Spring Stiffness**: 260 (entry), 400 (hover)
- **Spring Damping**: 20 (entry), 10 (hover)
- **Hover Scale**: 1.1x
- **Hover Lift**: -5px
- **Glow Intensity**: 30px blur on hover

## Performance Optimizations

### Efficient Algorithms
- **Early Termination**: Force simulation stops when stable
- **Collision Caching**: Efficient distance calculations
- **Boundary Clamping**: Prevents unnecessary calculations outside bounds

### React Optimizations
- **useCallback**: Memoized hover handlers
- **Conditional Rendering**: Only render when positions are ready
- **Lazy Loading**: Images load asynchronously
- **Key Optimization**: Stable keys for React reconciliation

### Animation Performance
- **Hardware Acceleration**: Uses transform properties
- **Framer Motion**: Optimized animation library
- **Spring Physics**: Natural, performant animations
- **Minimal Reflows**: Avoids layout-triggering properties

## Browser Compatibility

- Modern browsers with CSS transform support
- Framer Motion compatibility
- SVG animation support
- ES2020+ JavaScript features

## Usage Example

```tsx
import PeopleConnections from '@/components/PeopleConnections'

function MyComponent() {
  return (
    <div className="w-full h-96">
      <PeopleConnections />
    </div>
  )
}
```

## Customization

### Adding New Profiles
Update the `profiles` array with new entries:
```typescript
const profiles = [
  { id: 9, name: 'New Person', img: 'path/to/image.jpg' },
  // ... existing profiles
]
```

### Modifying Connections
Update the `connections` array with node indices:
```typescript
const connections = [
  [0, 8], // Connect first node to new node
  // ... existing connections
]
```

### Styling Adjustments
- Modify Tailwind classes for different appearances
- Adjust animation parameters in motion components
- Change color schemes in SVG stroke properties

## Troubleshooting

### Nodes Overlapping
1. Increase `MIN_DISTANCE` constant
2. Adjust `REPULSION_STRENGTH` for stronger forces
3. Increase `MAX_ITERATIONS` for more simulation steps

### Performance Issues
1. Reduce animation complexity
2. Optimize image sizes
3. Consider virtualization for large node counts

### Animation Glitches
1. Check Framer Motion version compatibility
2. Verify CSS transform support
3. Ensure proper key props on animated elements

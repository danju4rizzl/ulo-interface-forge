# Video Expansion Animation

## Overview

The video expansion animation creates a futuristic, scroll-triggered effect where videos start at a compact 400px width and smoothly expand to fill their container as the user scrolls. The animation includes subtle downward sliding motion and futuristic glow effects.

## Features

- **Initial State**: Video starts at 400px width with rounded edges
- **Scroll-Triggered Expansion**: Smoothly expands bidirectionally to container width during scroll
- **Futuristic Styling**: Gradient borders, subtle glow effects, and curved appearance
- **Persistent State**: Remains expanded when scrolled past the trigger zone
- **Responsive Design**: Adapts to different screen sizes
- **Performance Optimized**: Uses GSAP and transform properties for smooth animations

## Implementation

### Components Modified

1. **VideoShowcaseSection.tsx**
   - Added GSAP ScrollTrigger integration
   - Implemented scroll-based width expansion
   - Added state management for expansion tracking
   - Integrated futuristic styling classes

2. **index.css**
   - Added `.futuristic-video-container` styling
   - Implemented gradient borders and glow effects
   - Added curved middle effect with perspective transform
   - Created `futuristic-glow` keyframe animation

3. **tailwind.config.ts**
   - Added `video-expand` keyframe animation
   - Added `glow-pulse` animation for enhanced effects

### Key Animation Properties

```typescript
// Scroll trigger configuration
ScrollTrigger.create({
  trigger: section,
  start: 'top 80%',
  end: 'bottom 20%',
  scrub: 1,
  onUpdate: (self) => {
    const progress = self.progress
    const startWidth = 400
    const endWidth = Math.min(1024, window.innerWidth - 64)
    const currentWidth = startWidth + (endWidth - startWidth) * progress
    const translateY = progress * 20 // Subtle downward motion
    
    gsap.to(container, {
      width: `${currentWidth}px`,
      maxWidth: `${currentWidth}px`,
      transform: `translateY(${translateY}px)`,
      duration: 0.1,
      ease: 'none'
    })
  }
})
```

### CSS Classes

- `.futuristic-video-container`: Base styling with gradient background and border
- `.futuristic-video-container.expanded`: Enhanced styling when expanded
- `.futuristic-video-container::before`: Animated gradient border effect

## Usage

The animation is automatically applied to the VideoShowcaseSection component. No additional configuration is required.

### Manual Implementation

To apply this animation to other video components:

1. Add the required refs and state:
```typescript
const [isExpanded, setIsExpanded] = useState(false)
const containerRef = useRef<HTMLDivElement>(null)
const sectionRef = useRef<HTMLDivElement>(null)
```

2. Implement the ScrollTrigger effect in a useEffect hook

3. Apply the CSS classes:
```jsx
<div
  ref={containerRef}
  className={`futuristic-video-container ${isExpanded ? 'expanded' : ''}`}
>
  <video />
</div>
```

## Browser Compatibility

- Modern browsers with CSS transform support
- GSAP ScrollTrigger compatibility
- Requires JavaScript enabled

## Performance Considerations

- Uses `transform` properties for optimal performance
- GSAP handles animation optimization automatically
- ScrollTrigger cleanup prevents memory leaks
- Minimal DOM manipulation during scroll

## Customization

### Animation Timing
Modify the ScrollTrigger start/end points:
```typescript
start: 'top 80%',  // Start when section is 80% from top
end: 'bottom 20%', // End when section is 20% from bottom
```

### Expansion Range
Adjust the width calculation:
```typescript
const startWidth = 400  // Initial width in pixels
const endWidth = Math.min(1024, window.innerWidth - 64) // Max width
```

### Glow Effects
Modify the CSS custom properties in `.futuristic-video-container::before` for different glow colors and intensities.

## Troubleshooting

### Animation Not Working
1. Ensure GSAP and ScrollTrigger are properly imported
2. Check that refs are properly attached to DOM elements
3. Verify ScrollTrigger cleanup in useEffect return function

### Performance Issues
1. Reduce animation frequency by adjusting `duration` in gsap.to()
2. Use `will-change: transform` CSS property for better performance
3. Consider using `transform3d()` for hardware acceleration

### Styling Issues
1. Ensure CSS classes are properly applied
2. Check for conflicting styles in parent components
3. Verify border-radius values match container styling

# Header Animation Fix

## Problem

The header navigation had a shrinking animation that worked when scrolling down past 200px, but the reverse expansion animation was not working properly when scrolling back up above 200px.

## Root Cause

The original implementation had several issues:

1. **Animation Conflicts**: Multiple GSAP animations could run simultaneously without proper cleanup
2. **Initial State**: No proper initialization of the header state based on current scroll position
3. **Event Listener Optimization**: Missing passive event listener for better performance

## Solution

### Key Improvements

1. **Animation Management**
   - Added proper GSAP tween cleanup to prevent animation conflicts
   - Store reference to current animation and kill it before starting new ones

2. **Initial State Handling**
   - Check initial scroll position on component mount
   - Set appropriate header state without animation on first load

3. **Performance Optimization**
   - Added passive event listener for scroll events
   - Proper cleanup of event listeners and animations on unmount

### Code Changes

#### Enhanced Scroll Handler

```typescript
useEffect(() => {
  const header = headerRef.current
  const container = containerRef.current
  if (!header || !container) return
  
  let isScrolled = false
  let tween: gsap.core.Tween | null = null
  
  const handleScroll = () => {
    const scrollY = window.scrollY
    const shouldShrink = scrollY >= 200
    
    // Kill any existing animation to prevent conflicts
    if (tween) {
      tween.kill()
    }
    
    if (shouldShrink && !isScrolled) {
      // Shrink animation - scroll down past 200px
      isScrolled = true
      tween = gsap.to(container, {
        duration: 0.6,
        maxWidth: 'calc(100% - 600px)',
        borderRadius: '24px',
        marginTop: '12px',
        ease: 'power2.out'
      })
    } else if (!shouldShrink && isScrolled) {
      // Expand animation - scroll up above 200px
      isScrolled = false
      tween = gsap.to(container, {
        duration: 0.6,
        maxWidth: '100%',
        borderRadius: '0px',
        marginTop: '0px',
        ease: 'power2.out'
      })
    }
  }
  
  // Set initial state based on current scroll position
  const initialScrollY = window.scrollY
  if (initialScrollY >= 200) {
    isScrolled = true
    gsap.set(container, {
      maxWidth: 'calc(100% - 600px)',
      borderRadius: '24px',
      marginTop: '12px'
    })
  } else {
    isScrolled = false
    gsap.set(container, {
      maxWidth: '100%',
      borderRadius: '0px',
      marginTop: '0px'
    })
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => {
    window.removeEventListener('scroll', handleScroll)
    if (tween) {
      tween.kill()
    }
  }
}, [])
```

## Animation Behavior

### Shrinking (Scroll Down Past 200px)
- **maxWidth**: `100%` → `calc(100% - 600px)`
- **borderRadius**: `0px` → `24px`
- **marginTop**: `0px` → `12px`
- **Duration**: 0.6 seconds
- **Easing**: `power2.out`

### Expanding (Scroll Up Above 200px)
- **maxWidth**: `calc(100% - 600px)` → `100%`
- **borderRadius**: `24px` → `0px`
- **marginTop**: `12px` → `0px`
- **Duration**: 0.6 seconds
- **Easing**: `power2.out`

## Testing

To test the header animation:

1. **Load the page** - Header should be in full-width state
2. **Scroll down past 200px** - Header should smoothly shrink with rounded corners
3. **Scroll back up above 200px** - Header should smoothly expand back to full width
4. **Rapid scrolling** - Animations should not conflict or stutter

## Performance Considerations

- **Passive Event Listeners**: Scroll events use passive listeners for better performance
- **Animation Cleanup**: Proper cleanup prevents memory leaks and animation conflicts
- **GSAP Optimization**: Using GSAP's built-in optimization for smooth animations

## Browser Compatibility

- Modern browsers with GSAP support
- CSS transform and transition support required
- Tested on Chrome, Firefox, Safari, and Edge

## Troubleshooting

### Animation Not Working
1. Check that GSAP is properly imported and initialized
2. Verify that refs are properly attached to DOM elements
3. Ensure no CSS conflicts with GSAP animations

### Performance Issues
1. Check for multiple scroll event listeners
2. Verify proper cleanup in useEffect return function
3. Consider throttling scroll events if needed

### Visual Glitches
1. Ensure initial state is set correctly
2. Check for CSS transition conflicts
3. Verify border-radius and margin values are appropriate

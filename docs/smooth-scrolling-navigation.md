# Smooth Scrolling Navigation

## Overview

The navigation header includes smooth scrolling functionality that allows users to navigate to different sections of the page with animated scrolling transitions.

## Implementation

### Navigation Mapping

The navigation items are mapped to the following section IDs:

- **Products** → `services-section` (AncillaryServicesShowcase component)
- **Solutions** → `business-section` (BusinessShowcaseSection component)  
- **Community** → `community-section` (AnalyticsSection component)

### Components Modified

1. **Header.tsx** - Updated navigation links to use smooth scrolling
2. **utils.ts** - Added `smoothScrollToSection` utility function

### Key Features

- **Smooth Animation**: Uses browser's native `scrollTo` with `behavior: 'smooth'`
- **Header Offset**: Accounts for fixed header height (120px) when scrolling
- **Mobile Menu Integration**: Automatically closes mobile menu after navigation
- **Animated Mobile Close**: Uses GSAP animation when closing mobile menu after navigation

## Usage

### Adding New Navigation Items

To add a new navigation item:

1. Add the section ID to the target component:
   ```tsx
   <section id="your-section-id">
     {/* Section content */}
   </section>
   ```

2. Update the Header component navigation:
   ```tsx
   <Button
     variant="ghost"
     className="text-sm text-black hover:text-black/70 hover:bg-white cursor-pointer"
     onClick={() => handleNavClick('your-section-id')}
   >
     Your Nav Item
   </Button>
   ```

3. Add the corresponding mobile navigation item:
   ```tsx
   <button
     onClick={() => handleNavClick('your-section-id')}
     className="block text-black/70 hover:text-black text-lg transition-colors text-left w-full"
   >
     Your Nav Item
   </button>
   ```

### Customizing Scroll Behavior

The `smoothScrollToSection` function in `src/lib/utils.ts` can be customized:

```typescript
export function smoothScrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerHeight = 120 // Adjust this value based on your header height
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth' // Can be changed to 'auto' for instant scrolling
    })
  }
}
```

## Browser Support

- Modern browsers support `scrollTo` with `behavior: 'smooth'`
- Falls back to instant scrolling in older browsers
- No additional polyfills required

## Testing

To test the smooth scrolling functionality:

1. Start the development server: `npm run dev`
2. Click on navigation items in the header
3. Verify smooth scrolling to the correct sections
4. Test mobile menu navigation and automatic closing
5. Ensure proper offset from the fixed header

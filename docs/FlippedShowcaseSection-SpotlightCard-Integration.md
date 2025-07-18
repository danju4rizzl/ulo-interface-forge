# FlippedShowcaseSection SpotlightCard Integration

## Overview

The `FlippedShowcaseSection` component has been updated to exclusively use `SpotlightCard` components for the right-side content display, replacing the previous support for images and videos.

## Changes Made

### 1. Updated FlippedSlide Interface

Extended the `FlippedSlide` interface in both `src/types/index.ts` and `src/components/FlippedShowcaseSection.tsx` to include SpotlightCard-specific properties:

```typescript
interface FlippedSlide {
  id: number;
  title: string;
  description: string;
  contentType: 'video' | 'image' | 'component';
  videoUrl?: string;
  imageUrl?: string;
  component?: React.ReactNode;
  // SpotlightCard specific properties
  icon?: React.ReactNode;
  spotlightTitle?: string;
  spotlightDescription?: string;
}
```

### 2. Updated Component Rendering Logic

Modified the `renderContent()` function in `FlippedShowcaseSection.tsx` to properly render SpotlightCard components with:
- Icon display with blue accent color
- Title in white text
- Description in gray text
- Centered layout within the card

### 3. Updated Data Structure

Modified `src/data/index.ts` to:
- Import necessary icons from `lucide-react` (BarChart3, Users, Zap, Settings)
- Convert all slides to use `contentType: 'component'`
- Add appropriate icons and content for each slide using `React.createElement()`

## Current Slide Configuration

All four slides now use SpotlightCard with the following content:

1. **Advanced Analytics** - BarChart3 icon
2. **Customer Engagement** - Users icon  
3. **Growth Acceleration** - Zap icon
4. **Smart Integration** - Settings icon

## Usage

The component continues to work the same way from a parent component perspective:

```tsx
<FlippedShowcaseSection
  slides={flippedSlides}
  sectionTitle="Discover Advanced Features"
/>
```

## SpotlightCard Features

Each SpotlightCard includes:
- Interactive spotlight effect that follows mouse movement
- Dark theme with neutral-900 background
- Rounded corners and border styling
- Smooth opacity transitions
- Responsive design

## Technical Notes

- Icons are created using `React.createElement()` to avoid JSX syntax issues in the data file
- All slides maintain the same timing behavior (5 seconds per slide)
- The component maintains backward compatibility with the existing interface
- SpotlightCard styling is consistent across all slides

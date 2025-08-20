# VideoContentSection Component

## Overview

The `VideoContentSection` is a reusable React component that displays two video sections with accompanying text content. It was refactored from the original `HandsfreeManagementSection` to be more flexible and reusable across different use cases.

## Features

- **Dual Video Layout**: Displays two video sections with different layouts
- **Intersection Observer**: Automatically plays/pauses videos when they enter/leave the viewport
- **Responsive Design**: Adapts to different screen sizes
- **Customizable Content**: Accepts props for titles, subtitles, and video URLs
- **Accessibility**: Includes proper video controls and fallback content

## Props Interface

```typescript
interface VideoContentSectionProps {
  title1: string // Title for the first section
  subtitle1: string // Subtitle for the first section
  video1: string // Video URL for the first section
  title2: string // Title for the second section
  subtitle2: string // Subtitle for the second section
  video2: string // Video URL for the second section
  sectionId?: string // Optional custom section ID (default: 'video-content-section')
  className?: string // Optional additional CSS classes
}
```

## Usage

### Basic Usage

```tsx
import VideoContentSection from '@/components/VideoContentSection'

const MyPage = () => {
  return (
    <VideoContentSection
      title1="Your First Title"
      subtitle1="Your first subtitle description"
      video1="https://example.com/video1.mp4"
      title2="Your Second Title"
      subtitle2="Your second subtitle description"
      video2="https://example.com/video2.mp4"
    />
  )
}
```

### With Custom Section ID and Classes

```tsx
<VideoContentSection
  title1="Custom Title"
  subtitle1="Custom subtitle"
  video1="https://example.com/video1.mp4"
  title2="Second Title"
  subtitle2="Second subtitle"
  video2="https://example.com/video2.mp4"
  sectionId="my-custom-section"
  className="my-custom-class"
/>
```

### Current Implementation (Hands-Free Management)

```tsx
<VideoContentSection
  title1="Hands‑Free Management"
  subtitle1="Bookings, guest check‑ins, cleaning, and support — handled for you. Focus on what matters while Ulô runs the day‑to‑day."
  video1="https://res.cloudinary.com/dfcsaxtru/video/upload/q_40/v1755007130/INTRO_HANDS-FREE__nf3r51.mp4"
  title2="Make your stay more special"
  subtitle2="Get incredible services at a range of prices right at your Ulô stay."
  video2="https://res.cloudinary.com/dfcsaxtru/video/upload/q_40/v1754571912/ANCILARY_V2_gxpgwl.mp4"
  sectionId="handsfree-section"
/>
```

## Layout Structure

### First Section

- **Layout**: Two-column grid (text left, video right)
- **Styling**: White background, responsive padding
- **Video**: Full width with `object-fill` sizing

### Second Section

- **Layout**: Centered content with video below
- **Styling**: Responsive padding, centered text
- **Video**: Fixed aspect ratio (9:19.5) with specific width constraints

## Video Behavior

- **Auto-play**: Videos automatically play when they enter the viewport (100px threshold)
- **Auto-pause**: Videos pause when they leave the viewport
- **Muted**: All videos are muted by default
- **Loop**: Videos loop continuously
- **Preload**: Metadata is preloaded for better performance

## Styling

The component uses Tailwind CSS classes and follows the project's design system:

- **Typography**: Uses `text-primary` and `text-primary/60` for consistent theming
- **Responsive**: Adapts layout for different screen sizes
- **Spacing**: Consistent padding and margins throughout

## Migration from HandsfreeManagementSection

If you're migrating from the old `HandsfreeManagementSection`:

1. Update the import:

   ```tsx
   // Old
   import HandsFreeManagementSection from '@/components/HandsfreeManagementSection'

   // New
   import VideoContentSection from '@/components/VideoContentSection'
   ```

2. Add required props:

   ```tsx
   // Old
   <HandsFreeManagementSection />

   // New
   <VideoContentSection
     title1="Your Title"
     subtitle1="Your Subtitle"
     video1="video-url"
     title2="Second Title"
     subtitle2="Second Subtitle"
     video2="second-video-url"
   />
   ```

## Best Practices

1. **Video Optimization**: Use optimized video files (compressed, appropriate resolution)
2. **Accessibility**: Ensure video content has appropriate fallback text
3. **Performance**: Consider lazy loading for videos not immediately visible
4. **Content**: Keep titles and subtitles concise for better readability
5. **URLs**: Use CDN URLs for better performance and reliability

## Example Use Cases

### Business Features Section

```tsx
<VideoContentSection
  title1="Advanced Analytics"
  subtitle1="Get detailed insights into your business performance with real-time analytics and reporting."
  video1="https://example.com/analytics-demo.mp4"
  title2="Customer Engagement"
  subtitle2="Connect with your customers through personalized experiences and targeted campaigns."
  video2="https://example.com/engagement-demo.mp4"
  sectionId="business-features"
/>
```

### Product Showcase Section

```tsx
<VideoContentSection
  title1="Revolutionary Design"
  subtitle1="Experience the future of technology with our cutting-edge design and innovation."
  video1="https://example.com/product-design.mp4"
  title2="Seamless Integration"
  subtitle2="Integrate effortlessly with your existing workflow and tools."
  video2="https://example.com/integration-demo.mp4"
  sectionId="product-showcase"
/>
```

## File Location

- **Component**: `src/components/VideoContentSection.tsx`
- **Documentation**: `docs/VideoContentSection.md`

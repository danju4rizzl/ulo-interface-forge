# BlurText Component

The BlurText component is a React component that provides animated text with blur effects and optional text cycling functionality.

## Features

- **Blur Animation**: Smooth blur-in animation effects for text
- **Text Cycling**: Automatically cycle through different text options with blur transitions (after initial animation)
- **Flexible Animation**: Animate by words or letters
- **Intersection Observer**: Animations trigger when component comes into view
- **TypeScript Support**: Full TypeScript support with proper type definitions

## Props

| Prop                  | Type                                      | Default     | Description                                         |
| --------------------- | ----------------------------------------- | ----------- | --------------------------------------------------- |
| `text`                | `string`                                  | `''`        | The main/prefix text to display                     |
| `suffix`              | `string[]`                                | `undefined` | Array of texts to cycle through after the main text |
| `cycleInterval`       | `number`                                  | `3000`      | Time in milliseconds between text changes           |
| `bottomText`          | `string`                                  | `undefined` | Optional second line of text                        |
| `delay`               | `number`                                  | `200`       | Delay between animating each word/letter (ms)       |
| `className`           | `string`                                  | `''`        | Additional CSS classes                              |
| `animateBy`           | `'words' \| 'letters'`                    | `'words'`   | Whether to animate by words or letters              |
| `direction`           | `'top' \| 'bottom'`                       | `'top'`     | Animation direction                                 |
| `threshold`           | `number`                                  | `0.1`       | Intersection observer threshold                     |
| `rootMargin`          | `string`                                  | `'0px'`     | Intersection observer root margin                   |
| `animationFrom`       | `Record<string, string \| number>`        | `undefined` | Custom initial animation state                      |
| `animationTo`         | `Array<Record<string, string \| number>>` | `undefined` | Custom animation steps                              |
| `easing`              | `(t: number) => number`                   | `(t) => t`  | Custom easing function                              |
| `onAnimationComplete` | `() => void`                              | `undefined` | Callback when initial animation completes           |
| `stepDuration`        | `number`                                  | `0.35`      | Duration of each animation step                     |

## Usage Examples

### Basic Text Animation

```tsx
import BlurText from './components/BlurText'

;<BlurText
  text="Welcome to our website"
  className="text-4xl font-bold"
  animateBy="words"
/>
```

### Text Cycling Animation

```tsx
<BlurText
  text="Don't just visit"
  suffix={['Africa', 'Lagos', 'Cape Town', 'Kenya']}
  cycleInterval={3000}
  className="text-4xl font-bold"
  animateBy="words"
/>
```

This will display:

1. **Initial load**: All text animates in with blur effect: "Don't just visit Africa"
2. **After 3 seconds**: Only "Africa" blurs out and "Lagos" blurs in: "Don't just visit Lagos"
3. **After 3 seconds**: Only "Lagos" blurs out and "Cape Town" blurs in: "Don't just visit Cape Town"
4. **After 3 seconds**: Only "Cape Town" blurs out and "Kenya" blurs in: "Don't just visit Kenya"
5. **After 3 seconds**: Cycles back to "Don't just visit Africa"

## Animation Behavior

### Initial Animation

- When the component first enters the viewport, all text (prefix + first suffix item) animates in with blur effect
- This happens only once when the page loads

### Cycling Animation (After Initial Load)

- **Only starts after the initial animation completes**
- When both `text` and `suffix` props are provided:
  - The `text` prop serves as the static prefix (doesn't animate during cycling)
  - The `suffix` array items cycle through automatically
  - Only the cycling part (suffix) has blur transitions during cycling
  - Each suffix item displays for the specified `cycleInterval` duration

### Blur Transition Details

- Initial animation: Full blur-in effect for all text
- Cycling transitions: 600ms blur effect only for suffix text
- Text changes occur at the midpoint of the blur transition (300ms)
- Smooth fade-out → text change → fade-in sequence

## Technical Implementation

The component uses React hooks for state management:

- `useState` for tracking animation states and current suffix index
- `useEffect` for intersection observer and cycling logic
- `useMemo` for optimizing text splitting operations
- `useRef` for DOM references and timer management

## Dependencies

- `framer-motion`: For animations
- `react`: React hooks (useState, useEffect, useMemo, useRef)

## Browser Support

The component uses:

- Intersection Observer API (modern browsers)
- CSS filter property for blur effects
- Framer Motion animations

Ensure your target browsers support these features or include appropriate polyfills.

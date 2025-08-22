# FAQSection Accordion Component

## Overview

The `FAQSection` component has been transformed from a static text display into an interactive accordion interface. Each FAQ item can be clicked to expand/collapse the answer, with only one item expanded at a time for better user experience.

## Features

### ✅ **Accordion Behavior**

- Only one FAQ item can be expanded at a time
- Clicking an expanded item collapses it
- Clicking a collapsed item expands it and collapses others

### ✅ **Visual Indicators**

- Chevron down icon that rotates 180° when expanded
- Smooth rotation animation (200ms duration)
- Icon positioned on the right side of each question

### ✅ **Smooth Animations**

- Expand/collapse transitions with 300ms duration
- Opacity and max-height animations for smooth reveal
- Hover effects on accordion items and buttons

### ✅ **Accessibility**

- Full keyboard navigation support (Enter and Space keys)
- Proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-hidden`)
- Focus management with visible focus rings
- Screen reader friendly structure

### ✅ **Enhanced Styling**

- Card-based design with subtle shadows
- Hover states for better interactivity
- Active states with focus indicators
- Maintains existing design aesthetic

### ✅ **State Management**

- React state tracks currently expanded item
- TypeScript interfaces for type safety
- Efficient re-rendering with proper key handling

## Props Interface

```typescript
interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs?: FAQItem[]
}
```

## Usage

### Basic Usage (Default FAQs)

```tsx
import FAQSection from '@/components/FAQSection'

const MyPage = () => {
  return <FAQSection />
}
```

### Custom FAQs

```tsx
import FAQSection from '@/components/FAQSection'

const customFAQs = [
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day money-back guarantee for all our services.'
  },
  {
    question: 'How do I contact support?',
    answer:
      'You can reach our support team via email at support@example.com or through our live chat.'
  }
]

const MyPage = () => {
  return <FAQSection faqs={customFAQs} />
}
```

## Component Structure

### Accordion Item Layout

```
┌─────────────────────────────────────────┐
│ [Question Text]                    [▼]  │ ← Clickable button
├─────────────────────────────────────────┤
│ Answer text content (when expanded)     │ ← Animated container
│ with proper spacing and typography     │
└─────────────────────────────────────────┘
```

### State Management

- `expandedIndex: number | null` - Tracks which FAQ is currently open
- `null` means all FAQs are collapsed
- Only one FAQ can be expanded at a time

## Styling Classes

### Container Classes

- `bg-white` - White background for each FAQ card
- `rounded-lg` - Rounded corners for modern look
- `border border-gray-200` - Subtle border
- `shadow-sm hover:shadow-md` - Elevation on hover

### Button Classes

- `w-full px-6 py-5` - Full width with consistent padding
- `focus:ring-2 focus:ring-primary` - Accessible focus states
- `hover:bg-gray-50` - Subtle hover background

### Animation Classes

- `transition-all duration-200` - Card hover animations
- `transition-transform duration-200` - Icon rotation
- `transition-all duration-300 ease-in-out` - Content expand/collapse

## Accessibility Features

### Keyboard Navigation

- **Enter** or **Space**: Toggle FAQ expansion
- **Tab**: Navigate between FAQ items
- **Shift+Tab**: Navigate backwards

### ARIA Attributes

- `aria-expanded`: Indicates if FAQ is open/closed
- `aria-controls`: Links button to content area
- `aria-hidden`: Hides collapsed content from screen readers
- `role="button"`: Explicit button role for screen readers

### Focus Management

- Visible focus rings with primary color
- Focus remains on clicked item after interaction
- Proper tab order maintained

## Animation Details

### Expand Animation

1. `max-h-0` → `max-h-96` (height expansion)
2. `opacity-0` → `opacity-100` (fade in)
3. Icon rotates from 0° to 180°
4. Duration: 300ms with ease-in-out timing

### Collapse Animation

1. `max-h-96` → `max-h-0` (height collapse)
2. `opacity-100` → `opacity-0` (fade out)
3. Icon rotates from 180° to 0°
4. Duration: 300ms with ease-in-out timing

## Default FAQ Data

The component includes default FAQ data about Ulo Business Profile:

1. **Getting Started**: How to create a business profile
2. **Profile Changes**: Timeline for updates to appear
3. **Pricing**: Confirmation that the service is free

## Migration from Static Version

### Before (Static)

```tsx
// Static display - all answers always visible
<div>
  <h3>{faq.question}</h3>
  <p>{faq.answer}</p>
</div>
```

### After (Interactive)

```tsx
// Interactive accordion - answers expand/collapse
<button onClick={() => toggleFAQ(index)} aria-expanded={isExpanded}>
  <h3>{faq.question}</h3>
  <ChevronDown className={isExpanded ? 'rotate-180' : ''} />
</button>
<div className={isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}>
  <p>{faq.answer}</p>
</div>
```

## Best Practices

1. **Content Length**: Keep answers concise for better UX
2. **Question Clarity**: Write clear, specific questions
3. **Loading States**: Consider skeleton loading for dynamic FAQs
4. **Mobile Optimization**: Component is fully responsive
5. **Performance**: Uses efficient state management and animations

## Testing the Component

### Manual Testing Checklist

#### ✅ **Accordion Behavior**

- [ ] Click on a FAQ item to expand it
- [ ] Click on another FAQ item - previous one should collapse
- [ ] Click on an expanded FAQ item to collapse it
- [ ] Only one FAQ should be expanded at any time

#### ✅ **Keyboard Navigation**

- [ ] Tab through FAQ items
- [ ] Press Enter or Space to toggle expansion
- [ ] Focus should remain on the clicked item
- [ ] Focus ring should be visible

#### ✅ **Visual Feedback**

- [ ] Chevron icon rotates when expanding/collapsing
- [ ] Smooth animations for expand/collapse (300ms)
- [ ] Hover effects on FAQ items
- [ ] Card shadows change on hover

#### ✅ **Accessibility**

- [ ] Screen reader announces expanded/collapsed state
- [ ] ARIA attributes are properly set
- [ ] Content is hidden from screen readers when collapsed

### Unit Testing Example

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import FAQSection from '@/components/FAQSection'

describe('FAQSection', () => {
  const mockFAQs = [
    { question: 'Test Question 1', answer: 'Test Answer 1' },
    { question: 'Test Question 2', answer: 'Test Answer 2' }
  ]

  test('renders FAQ questions', () => {
    render(<FAQSection faqs={mockFAQs} />)
    expect(screen.getByText('Test Question 1')).toBeInTheDocument()
    expect(screen.getByText('Test Question 2')).toBeInTheDocument()
  })

  test('expands FAQ on click', () => {
    render(<FAQSection faqs={mockFAQs} />)
    const button = screen.getByText('Test Question 1')
    fireEvent.click(button)
    expect(screen.getByText('Test Answer 1')).toBeVisible()
  })

  test('collapses other FAQs when expanding one', () => {
    render(<FAQSection faqs={mockFAQs} />)

    // Expand first FAQ
    fireEvent.click(screen.getByText('Test Question 1'))
    expect(screen.getByText('Test Answer 1')).toBeVisible()

    // Expand second FAQ
    fireEvent.click(screen.getByText('Test Question 2'))
    expect(screen.getByText('Test Answer 2')).toBeVisible()

    // First FAQ should be collapsed
    expect(screen.queryByText('Test Answer 1')).not.toBeVisible()
  })
})
```

## Performance Considerations

### Optimization Tips

1. **Large FAQ Lists**: Consider virtualization for 50+ items
2. **Long Answers**: Use `max-h-96` to prevent excessive height
3. **Images in Answers**: Lazy load images in FAQ content
4. **Animation Performance**: Uses CSS transforms for smooth animations

### Memory Usage

- Minimal state overhead (single number for expanded index)
- No unnecessary re-renders with proper key usage
- Efficient event handling with useCallback if needed

## File Location

- **Component**: `src/components/FAQSection.tsx`
- **Documentation**: `docs/FAQSection-Accordion.md`
- **Examples**: `docs/FAQSection-Examples.tsx`

import React from 'react'
import { HeroContent, BusinessSlide, FlippedSlide } from '@/types'
import { Car, Plane, Shield, Leaf, Shirt, ChefHat, User } from 'lucide-react'

export const heroContent: HeroContent = {
  title: 'Stand out on Ulo with a free Business Profile',
  description:
    'Turn people who find you on Ulo Search and Maps into new customers with a free Business Profile for your storefront or service area.',
  videoUrl:
    'https://res.cloudinary.com/dfcsaxtru/video/upload/v1752921081/COMPRESSED_rzbhs8.mp4'
}

export const businessSlides: BusinessSlide[] = [
  {
    id: 0,
    title: 'Hands-free Management',
    description:
      'Your Business Profile lets you connect with customers across Ulo Search and Maps. When people search for businesses like yours, make sure they find your business.',
    videoUrl:
      'https://res.cloudinary.com/dfcsaxtru/video/upload/v1752930081/HOST_XPE-_zjlufk.mp4'
  },
  {
    id: 1,
    title: 'Xperience Reels',
    description:
      'Customers are more likely to choose a business with photos, reviews, and up-to-date information. Your Business Profile helps you put your best foot forward.',
    videoUrl:
      'https://res.cloudinary.com/dfcsaxtru/video/upload/v1752930082/XPERIENCE_REELS_zg6mrp.mp4'
  },
  {
    id: 2,
    title: 'Associates',
    description:
      'Keep customers engaged with regular updates, respond to reviews, and showcase what makes your business special with photos and posts.',
    videoUrl:
      'https://res.cloudinary.com/dfcsaxtru/video/upload/v1752586704/GUEST_XPE_rwhehv.mp4'
  },
  {
    id: 3,
    title: 'Local Payments',
    description:
      'Use insights and analytics to understand how customers find and interact with your business, helping you make data-driven decisions.',
    videoUrl:
      'https://res.cloudinary.com/dfcsaxtru/video/upload/v1752584118/PAYMENT_xomfml.mp4'
  }
]

export const flippedSlides: FlippedSlide[] = [
  {
    id: 0,
    title: 'Car Rental',
    description: 'Airport Pick-up and Drop-off or Personal Ride.',
    contentType: 'component',
    icon: React.createElement(Car, { size: 48 }),
    spotlightTitle: 'CAR RENTAL',
    spotlightDescription: 'Airport Pick-up and Drop-off or Personal Ride.'
  },
  {
    id: 1,
    title: 'Helicopter Rental',
    description: 'Luxury transfers and scenic aerial tours.',
    contentType: 'component',
    icon: React.createElement(Plane, { size: 48 }),
    spotlightTitle: 'HELICOPTER RENTAL',
    spotlightDescription: 'Luxury transfers and scenic aerial tours.'
  },
  {
    id: 2,
    title: 'Personal Security',
    description: 'Trained escorts for private safety and peace of mind.',
    contentType: 'component',
    icon: React.createElement(Shield, { size: 48 }),
    spotlightTitle: 'PERSONAL SECURITY',
    spotlightDescription:
      'Trained escorts for private safety and peace of mind.'
  },
  {
    id: 3,
    title: 'Herbal Care & Spa',
    description: 'Traditional wellness treatments rooted in African healing.',
    contentType: 'component',
    icon: React.createElement(Leaf, { size: 48 }),
    spotlightTitle: 'HERBAL CARE & SPA',
    spotlightDescription:
      'Traditional wellness treatments rooted in African healing.'
  },
  {
    id: 4,
    title: 'Laundry & Dry Cleaning',
    description: 'Premium garment care with swift pick-up and delivery.',
    contentType: 'component',
    icon: React.createElement(Shirt, { size: 48 }),
    spotlightTitle: 'LAUNDRY & DRY CLEANING',
    spotlightDescription:
      'Premium garment care with swift pick-up and delivery.'
  },
  {
    id: 5,
    title: 'Continental Chef',
    description: 'On-demand gourmet meals prepared by certified chefs.',
    contentType: 'component',
    icon: React.createElement(ChefHat, { size: 48 }),
    spotlightTitle: 'CONTINENTAL CHEF',
    spotlightDescription: 'On-demand gourmet meals prepared by certified chefs.'
  },
  {
    id: 6,
    title: 'Africa Yoga Instructor',
    description: 'Guided yoga sessions with a touch of African soul.',
    contentType: 'component',
    icon: React.createElement(User, { size: 48 }),
    spotlightTitle: 'AFRICA YOGA INSTRUCTOR',
    spotlightDescription: 'Guided yoga sessions with a touch of African soul.'
  }
]

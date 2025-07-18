import React from 'react'
import { HeroContent, BusinessSlide, FlippedSlide } from '@/types'
import { BarChart3, Users, Zap, Settings } from 'lucide-react'

export const heroContent: HeroContent = {
  title: 'Stand out on Ulo with a free Business Profile',
  description:
    'Turn people who find you on Ulo Search and Maps into new customers with a free Business Profile for your storefront or service area.',
  videoUrl:
    'https://res.cloudinary.com/deejaydev/video/upload/q_70/v1752616484/Ulo-v2-assets/Ulo_Short_Film-2_hal9ry.mp4'
}

export const businessSlides: BusinessSlide[] = [
  {
    id: 0,
    title: 'Hands-free Management',
    description:
      'Your Business Profile lets you connect with customers across Ulo Search and Maps. When people search for businesses like yours, make sure they find your business.',
    videoUrl:
      'https://res.cloudinary.com/dfcsaxtru/video/upload/v1752584143/HOST_XPE-_ptgjes.mp4'
  },
  {
    id: 1,
    title: 'Xperience Reels',
    description:
      'Customers are more likely to choose a business with photos, reviews, and up-to-date information. Your Business Profile helps you put your best foot forward.',
    videoUrl:
      'https://res.cloudinary.com/dfcsaxtru/video/upload/v1752586634/XPERIENCE_REELS_lj4ve6.mp4'
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
    title: 'Advanced Analytics',
    description:
      'Get detailed insights into your business performance with our comprehensive analytics dashboard.',
    contentType: 'component',
    icon: React.createElement(BarChart3, { size: 48 }),
    spotlightTitle: 'Advanced Analytics',
    spotlightDescription:
      'Track performance metrics, analyze customer behavior, and make data-driven decisions with our comprehensive analytics suite.'
  },
  {
    id: 1,
    title: 'Customer Engagement',
    description:
      'Build stronger relationships with your customers through personalized experiences and direct communication.',
    contentType: 'component',
    icon: React.createElement(Users, { size: 48 }),
    spotlightTitle: 'Customer Engagement',
    spotlightDescription:
      'Connect with your audience through personalized experiences, direct messaging, and community building tools.'
  },
  {
    id: 2,
    title: 'Growth Strategies',
    description:
      'Implement proven strategies to scale your business and reach new markets effectively.',
    contentType: 'component',
    icon: React.createElement(Zap, { size: 48 }),
    spotlightTitle: 'Growth Acceleration',
    spotlightDescription:
      'Scale your business with proven growth strategies, market expansion tools, and performance optimization.'
  },
  {
    id: 3,
    title: 'Technology Integration',
    description:
      'Seamlessly integrate modern technology solutions to streamline your operations and improve efficiency.',
    contentType: 'component',
    icon: React.createElement(Settings, { size: 48 }),
    spotlightTitle: 'Smart Integration',
    spotlightDescription:
      'Streamline operations with seamless technology integration, automated workflows, and intelligent systems.'
  }
]

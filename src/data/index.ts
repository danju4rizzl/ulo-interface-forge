import { HeroContent, BusinessSlide, FlippedSlide } from '@/types'

export const heroContent: HeroContent = {
  title: 'Stand out on Ulo with a free Business Profile',
  description:
    'Experience Africa like you belong, stay in soulful homes and explore with trusted locals who help you live, not just visit.',
  videoUrl:
    'https://res.cloudinary.com/dfcsaxtru/video/upload/v1753103839/COMPRESSED_V2_fnuozs.mp4'
}

export const businessSlides: BusinessSlide[] = [
  {
    id: 0,
    title: 'Hands-Free Management',
    description:
      'Earn without the effort. We handle bookings, cleaning, and guest support — so you can relax, travel, or focus on what matters.',
    videoUrl:
      'https://res.cloudinary.com/dfcsaxtru/video/upload/v1752930081/HOST_XPE-_zjlufk.mp4'
  },
  {
    id: 1,
    title: 'Xperience Reels',
    description:
      'See it before you stay. Watch real videos from past guests and hosts to feel the vibe, explore the space, and book with confidence.',
    videoUrl:
      'https://res.cloudinary.com/dfcsaxtru/video/upload/v1752930082/XPERIENCE_REELS_zg6mrp.mp4'
  },
  {
    id: 2,
    title: 'Ulô Associates',
    description:
      'Don’t just visit — connect. Our trusted on-ground associates help you explore, belong, and make the most of every moment in Africa.',
    videoUrl:
      'https://res.cloudinary.com/dfcsaxtru/video/upload/v1752586704/GUEST_XPE_rwhehv.mp4'
  },
  {
    id: 3,
    title: 'Local Payment, Global Ease',
    description:
      'Pay in your own currency, and earn in yours. Ulô makes transactions smooth and secure — no stress, no conversion headaches.',
    videoUrl:
      'https://res.cloudinary.com/dfcsaxtru/video/upload/v1752584118/PAYMENT_xomfml.mp4'
  }
]

export const flippedSlides: FlippedSlide[] = [
  {
    id: 0,
    title: 'Private Car Rentals',
    description:
      'Explore on your terms with reliable self-drive or chauffeur rides — including airport pickup and drop-off for smooth arrivals and departures.',
    contentType: 'component',
    icon: '/icons/CAR.png',
    spotlightTitle: 'Airport Pick-up and Drop-off or Personal Ride',
    spotlightDescription: 'Airport Pick-up and Drop-off or Personal Ride.'
  },
  {
    id: 1,
    title: 'Helicopter Rides',
    description:
      'Skip traffic or chase the horizon. Enjoy luxury transfers and unforgettable scenic aerial tours.',
    contentType: 'component',
    icon: '/icons/HELICOPTER.png',
    spotlightTitle: 'Luxury transfers and scenic aerial tours',
    spotlightDescription: 'Luxury transfers and scenic aerial tours.'
  },
  {
    id: 2,
    title: 'Personal Security',
    description:
      'Move with peace of mind. Our trained local escorts ensure you’re protected every step of the way.',
    contentType: 'component',
    icon: '/icons/SECURITY.png',
    spotlightTitle: 'Professional personal protection and security',
    spotlightDescription: 'Professional personal protection and security.'
  },
  {
    id: 3,
    title: 'Herbal Spa & Wellness',
    description:
      'Recharge with traditional African healing — from herbal massages to natural skincare rituals.',
    contentType: 'component',
    icon: '/icons/HEBARL CARE.png',
    spotlightTitle: 'Traditional African wellness and healing treatments',
    spotlightDescription: 'Traditional African wellness and healing treatments.'
  },
  {
    id: 4,
    title: 'Laundry & Garment Care',
    description:
      'Fresh looks, zero effort. Premium laundry with quick pick-up and delivery during your stay.',
    contentType: 'component',
    icon: '/icons/LAUNDARY.png',
    spotlightTitle: 'Premium garment care and cleaning services',
    spotlightDescription: 'Premium garment care and cleaning services.'
  },
  {
    id: 5,
    title: 'Continental Chef',
    description:
      'Dine like royalty. Certified chefs prepare gourmet meals tailored to your taste — right in your home.',
    contentType: 'component',
    icon: '/icons/CHEF.png',
    spotlightTitle: 'Professional culinary services for any occasion',
    spotlightDescription: 'Professional culinary services for any occasion.'
  },
  {
    id: 6,
    title: 'African Yoga',
    description:
      'Stretch, breathe, and connect. Experience guided yoga sessions inspired by African rhythms and soul.',
    contentType: 'component',
    icon: '/icons/YOGA.png',
    spotlightTitle: 'Personalized yoga and wellness sessions',
    spotlightDescription: 'Personalized yoga and wellness sessions.'
  }
]

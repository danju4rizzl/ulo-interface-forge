export interface HeroContent {
  title: string;
  description: string;
  videoUrl: string;
}

export interface BusinessSlide {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
}

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export interface AnalyticsStat {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FlippedSlide {
  id: number
  title: string
  description: string
  contentType: 'video' | 'image' | 'component'
  videoUrl?: string
  imageUrl?: string
  component?: React.ReactNode
  // SpotlightCard specific properties
  icon?: React.ReactNode
  spotlightTitle?: string
  spotlightDescription?: string
}

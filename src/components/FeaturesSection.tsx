import React from 'react';
import { Users, TrendingUp, Shield } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <img src="/icons/feature-icon4.svg" className="w-8 h-8" />,
      title: 'Hands-Free Management',
      description:
        'We handle bookings, guest check-ins, cleaning, and support — so you can relax, travel, or focus on what matters most.',
      bgColor: 'bg-primary'
    },
    {
      icon: <img src="/icons/feature-icon2.svg" className="w-8 h-8" />,
      title: 'Xperience Reels',
      description:
        'See real guest videos. Feel the atmosphere, energy, and stories — before you even book.',
      bgColor: 'bg-primary'
    },
    {
      icon: <img src="/icons/feature-icon3.svg" className="w-8 h-8" />,
      title: 'Local Tour Guides',
      description:
        'Connect and explore with trusted Ulô Associates — navigate with ease and feel at home through our Guest Handbook.',
      bgColor: 'bg-primary'
    },
    {
      icon: <img src="/icons/feature-icon1.svg" className="w-8 h-8" />,
      title: 'Multi-Payment Enable',
      description:
        'Pay in your currency, earn in local African currencies — no stress, just seamless transactions across borders.',
      bgColor: 'bg-primary'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-[60px] h-[60px] ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-base font-medium text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default FeaturesSection;

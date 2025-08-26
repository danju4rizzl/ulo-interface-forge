import React from 'react';
import { Users, TrendingUp, Shield } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <img src="/icons/feature-icon4.svg" className="w-8 h-8" />,
      title: 'Hands-Free Management',
      description:
        'Bookings, check-ins, cleaning & support — all handled for you.',
      bgColor: 'bg-primary'
    },
    {
      icon: <img src="/icons/feature-icon2.svg" className="w-8 h-8" />,
      title: 'Xperience Gallery',
      description: 'Watch real guest videos and feel the vibe before you book.',
      bgColor: 'bg-primary'
    },
    {
      icon: <img src="/icons/feature-icon3.svg" className="w-8 h-8" />,
      title: 'Ulô Associate',
      description:
        'Explore confidently with trusted, pre-vetted Associates and our Guest Handbook.',
      bgColor: 'bg-primary'
    },
    {
      icon: <img src="/icons/feature-icon1.svg" className="w-8 h-8" />,
      title: 'Borderless Payment Enable',
      description:
        'Pay globally, earn locally — seamless cross-border transactions.',
      bgColor: 'bg-primary'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group cursor-pointer ">
              <div
                className={`w-[60px] h-[60px] ${feature.bgColor} group-hover:bg-[#c68445] rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ease-in-out`}
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

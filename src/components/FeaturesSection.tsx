import React from 'react';
import { Users, TrendingUp, Shield } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Multi-Payment Enable',
      description:
        'Pay in your currency, earn in local African currencies — no stress, just seamless transactions across borders.',
      bgColor: 'bg-blue-100'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-600" />,
      title: 'Xperience Reels',
      description:
        'See real guest videos. Feel the atmosphere, energy, and stories — before you even book.',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Local Tour Guides',
      description:
        'Connect and explore with trusted Ulô Associates — navigate with ease and feel at home through our Guest Handbook.',
      bgColor: 'bg-green-100'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
